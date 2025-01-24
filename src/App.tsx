import React from 'react';
import {useTheme } from './context/ThemeContext';
import ConverterCard from './components/ConverterCard';
import { defaultTheme, Provider, View } from '@adobe/react-spectrum';
import Navbar from './components/Navbar';

function App() {
  const {isDarkMode} = useTheme();
  
  return (
        <Provider theme={defaultTheme} colorScheme={isDarkMode ? "dark" : "light"}>
          <Navbar/>
          <View height="100vh" backgroundColor="gray-100" padding="size-300">
            <ConverterCard/>
          </View>
        </Provider>
  );
}

export default App;
