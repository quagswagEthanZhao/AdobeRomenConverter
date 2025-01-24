import React, { useState } from 'react';
import {
  View,
  Flex,
  TextField,
  Button,
  Heading,
  ProgressCircle,
} from '@adobe/react-spectrum';
import useRomanNumeralConverter from '../lib/hooks/useRomanNumeralConverter';
import { useTheme } from '../lib/hooks/useTheme';

const ConverterCard: React.FC = (): React.JSX.Element => {
  const [input, setInput] = useState<string>('');
  const [validationState, setValidationState] = useState<
    'valid' | 'invalid' | undefined
  >(undefined);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const { result, loading, error, fetchRomanNumeral } =
    useRomanNumeralConverter();
  const { isDarkMode } = useTheme();
  const handleInputChange = (value: string) => {
    setInput(value);

    const parsedValue = parseInt(value, 10);

    if (value === '' || isNaN(parsedValue)) {
      setValidationState('invalid');
      setErrorMessage('Input must be a valid number.');
      return;
    }

    if (parsedValue < 1 || parsedValue > 3999) {
      setValidationState('invalid');
      setErrorMessage('Input must be an integer between 1 and 3999.');
      return;
    }

    setValidationState('valid');
    setErrorMessage(undefined); // Clear error message if input is valid
  };

  const handleConvert = async (_: any) => {
    const num = parseInt(input);
    if (validationState === 'valid' && num >= 1 && num <= 3999) {
      await fetchRomanNumeral(num); // Call the exposed fetch function
    }
  };
  return (
    <View
      padding="size-300"
      width="size-5600"
      marginStart="auto"
      marginEnd="auto"
      marginTop="size-800"
      borderRadius="large"
      backgroundColor="default" // Automatically adapts to the theme
    >
      <Flex direction="column" alignItems="center" gap="size-300">
        <Heading level={2} marginBottom="size-300">
          Roman numeral converter
        </Heading>
        <TextField
          label="Enter a number"
          value={String(input)}
          onChange={handleInputChange}
          type="number"
          width="80%"
          validationState={validationState}
          errorMessage={errorMessage}
        />
        <Button
          variant={isDarkMode ? 'primary' : 'cta'}
          onPress={handleConvert}
          isDisabled={loading || validationState !== 'valid'}
        >
          Convert to Roman Numeral
        </Button>
        {loading && <ProgressCircle aria-label="Loading" isIndeterminate />}
        {result && (
          <Heading level={4} marginTop="size-200">
            Roman numeral: {result}
          </Heading>
        )}
        {error && (
          <Heading level={4} marginTop="size-200">
            {error}
          </Heading>
        )}
      </Flex>
    </View>
  );
};

export default ConverterCard;
