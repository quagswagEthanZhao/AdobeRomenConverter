import { useState } from 'react';

// Custom hook for input validation
const useInputValidation = (initialValue: string) => {
  const [input, setInput] = useState<string>(initialValue);
  const [validationState, setValidationState] = useState<
    'valid' | 'invalid' | undefined
  >(undefined);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  // Validation logic
  const validateInput = (value: string) => {
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

  const handleInputChange = (value: string) => {
    // No leading 0 allowed
    const trimmedValue = value.replace(/^0+/, '');
    setInput(trimmedValue);
    validateInput(trimmedValue); // Call the validate function whenever input changes
  };

  return {
    input,
    validationState,
    errorMessage,
    handleInputChange,
  };
};

export default useInputValidation;
