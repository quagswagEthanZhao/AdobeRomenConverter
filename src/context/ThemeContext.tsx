import React, { createContext, ReactNode, useContext, useState } from "react";

interface ThemeContextProps {
    isDarkMode : boolean;
    toggleTheme : () => void;
}

interface ThemeProviderProps {
    children: ReactNode;
  }

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        console.log(isDarkMode);
    }
    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () : ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
}