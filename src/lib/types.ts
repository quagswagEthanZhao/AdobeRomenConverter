import { ReactNode } from 'react';

export interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface RomanNumeralResponse {
  input: string;
  output: string;
}
