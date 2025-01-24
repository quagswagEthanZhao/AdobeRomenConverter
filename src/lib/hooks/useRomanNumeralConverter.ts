import { useState } from 'react';
import { RomanNumeralResponse } from '../types';

const useRomanNumeralConverter = () => {
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const mockFetch = (
    input: number
  ): Promise<{ input: string; output: string }> => {
    return new Promise((resolve, reject) => {
      const ramdomSuccess = Math.random() > 0.1;

      setTimeout(() => {
        if (ramdomSuccess) {
          resolve({ input: input.toString(), output: 'IV' });
        } else {
          reject(new Error('Failed'));
        }
      }, 3000);
    });
  };

  const fetchRomanNumeral = async (input: number): Promise<void> => {
    setError('');
    setResult('');
    setLoading(true);

    try {
      //const res = await fetch(`http://localhost:8080/romannumeral?query=${input}`);
      const data = await mockFetch(input);
      // if (!res.ok){
      //     const errorText = await res.text();
      //     throw new Error(errorText || "Failed to fetch conversion");
      // }
      // const data : RomanNumeralResponse = await res.json();
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
