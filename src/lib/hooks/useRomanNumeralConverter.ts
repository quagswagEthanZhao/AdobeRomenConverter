import { useState } from 'react';
import { RomanNumeralResponse } from '../types';

const useRomanNumeralConverter = () => {
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchRomanNumeral = async (input: number): Promise<void> => {
    setError('');
    setResult('');
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:8080/romannumeral?number=${input}`
      );

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || 'Failed to fetch conversion');
      }
      const data: RomanNumeralResponse = await res.json();
      setResult(data.output);
    } catch (err: any) {
      setError(err?.message || 'An unknow error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { result, error, loading, fetchRomanNumeral };
};

export default useRomanNumeralConverter;
