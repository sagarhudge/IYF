import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import HomeStackNavigator from './HomeStack';
import { PaperProvider, MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';
import { MainStackNavigator } from './navigator/StackNavigator';
import DrawerNavigator from './navigator/DrawerNavigator';
const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });


export const theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#f74010',
    secondary: '#FEBC92',
    tertiary: '#FFD5B2',
    background: '#FFF9F2',
    light: '#fff6f3'
  }
};


const RootNavigator = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer >
        <MainStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default RootNavigator;