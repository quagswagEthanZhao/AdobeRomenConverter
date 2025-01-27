import React, { useState } from 'react';
import {
  View,
  Flex,
  TextField,
  Button,
  Heading,
  ProgressCircle,
} from '@adobe/react-spectrum';
import useRomanNumeralConverter from '../../lib/hooks/useRomanNumeralConverter';
import { useTheme } from '../../lib/hooks/useTheme';
import useInputValidation from '../../lib/hooks/useNumberInputValidation';

const NumberConverterForm: React.FC = (): React.JSX.Element => {
  const { result, loading, error, fetchRomanNumeral } =
    useRomanNumeralConverter();
  const { isDarkMode } = useTheme();
  const {
    input: inputValue,
    validationState: inputValidationState,
    errorMessage: inputErrorMessage,
    handleInputChange,
  } = useInputValidation('');

  // function to handle the convert button click
  const handleConvert = async (_: any) => {
    const num = parseInt(inputValue);
    if (inputValidationState === 'valid' && num >= 1 && num <= 3999) {
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
          value={String(inputValue)}
          onChange={handleInputChange}
          type="number"
          width="60%"
          validationState={inputValidationState}
          errorMessage={inputErrorMessage}
        />
        <Button
          variant={isDarkMode ? 'primary' : 'cta'}
          onPress={handleConvert}
          isDisabled={loading || inputValidationState !== 'valid'}
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

export default NumberConverterForm;
