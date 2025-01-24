import React from 'react';
import ConverterCard from './components/ConverterCard';
import { darkTheme, defaultTheme, Provider, View } from '@adobe/react-spectrum';
import Navbar from './components/Navbar';
import { useTheme } from './lib/hooks/useTheme';

function App(): React.JSX.Element {
  const { isDarkMode } = useTheme();

  return (
    <Provider
      theme={isDarkMode ? darkTheme : defaultTheme}
      colorScheme={isDarkMode ? 'dark' : 'light'} // Need to set both to avoid different system preference to override this.
    >
      <Navbar />
      <View height="100vh" backgroundColor="gray-100" padding="size-300">
        <ConverterCard />
      </View>
    </Provider>
  );
}

export default App;
