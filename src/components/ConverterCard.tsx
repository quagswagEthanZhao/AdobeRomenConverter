import React, { useState } from "react";
import { View, Flex, TextField, Button, Heading, ProgressCircle } from "@adobe/react-spectrum";
import { useTheme } from "../context/ThemeContext";
//import useRomanNumeralConverter from "../../hooks/useRomanNumeralConverter";

const ConverterCard: React.FC = () => {
  const [input, setInput] = useState<number | null>(null);
  const {isDarkMode} = useTheme();
  //const { result, error, loading, convertToRoman } = useRomanNumeralConverter();

//   const handleConvert = () => {
//     if (input !== null) {
//       convertToRoman(input);
//     }
//   };

  return (
    <View
      padding="size-300"
      width="size-5600"
      marginStart="auto"
      marginEnd="auto"
      marginTop="size-800"
      borderRadius="large"
      UNSAFE_style={{
        margin: "auto",
        maxWidth: "400px",
        boxShadow: isDarkMode
          ? "0 4px 12px rgba(0, 0, 0, 0.7)"
          : "0 4px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Flex direction="column" alignItems="center" gap="size-300">
        <Heading level={2} marginBottom="size-300">
          Roman numeral converter
        </Heading>
        <TextField
          label="Enter a number"
          value={String(input)}
          onChange={(value) => setInput(parseInt(value, 10) || null)}
          type="number"
          width="80%"
        />
        <Button variant="cta" onPress={() => {}} isDisabled={true || input === null}>
          Convert to Roman Numeral
        </Button>
        {false && <ProgressCircle aria-label="Loading" isIndeterminate />}
        {true && (
          <Heading level={4} marginTop="size-200">
            Roman numeral: {60}
          </Heading>
        )}
        {false && (
          <Heading level={4} marginTop="size-200">
            {"errror"}
          </Heading>
        )}
      </Flex>
    </View>
  );
};

export default ConverterCard;
