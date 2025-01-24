import React, { createContext, useState } from 'react';
import { ThemeContextProps, ThemeProviderProps } from '../lib/types';

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
