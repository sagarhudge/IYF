import * as React from 'react';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
 
import HomeStackNavigator from './HomeStack';
import { PaperProvider, MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';
const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });


const theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: 'rgb(120, 69, 172)#FCA072',
    secondary: '#FEBC92',
    tertiary: '#FFD5B2',
    background:'#FFF9F2'
  },
};


const RootNavigator = () => {
  return (
    <PaperProvider theme={theme}>

      <NavigationContainer >
        <HomeStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default RootNavigator;