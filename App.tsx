import React from 'react';
import { StatusBar } from 'react-native';

import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { SourceSansPro_400Regular } from '@expo-google-fonts/source-sans-pro';
import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    SourceSansPro_400Regular
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        backgroundColor='transparent'
        barStyle='dark-content'
        translucent
      />
      <Routes />
    </ThemeProvider>
  );
}

