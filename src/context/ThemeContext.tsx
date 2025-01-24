import React, { createContext, useEffect, useState } from 'react';
import { ThemeContextProps, ThemeProviderProps } from '../lib/types';

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const localTheme = localStorage.getItem('isDarkMode');
    return localTheme ? JSON.parse(localTheme) : false;
  });

  //Save theme to localstorage every time theme changes
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

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
