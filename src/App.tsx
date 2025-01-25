import React from 'react';
import { darkTheme, defaultTheme, Provider, View } from '@adobe/react-spectrum';
import { useTheme } from './lib/hooks/useTheme';
import Navbar from './components/NavBar/Navbar';
import NumberConverterForm from './components/ConverterCard/NumberConverterForm';

function App(): React.JSX.Element {
  const { isDarkMode } = useTheme();

  return (
    <Provider
      theme={isDarkMode ? darkTheme : defaultTheme}
      colorScheme={isDarkMode ? 'dark' : 'light'} // Need to set both to avoid different system preference to override this.
    >
      <Navbar />
      <View height="100vh" backgroundColor="gray-100" padding="size-300">
        <NumberConverterForm />
      </View>
    </Provider>
  );
}

export default App;
