import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../screens/moduleScreens1/SplashScreen'
import LoginScreen from '../screens/moduleScreens1/LoginScreen';

export type AppStackParams = {
    SplashScreen: undefined;
    LoginScreen: undefined; 
}

const Stack = createStackNavigator();

const AppStackNavigation = () => {
  return (
    <Stack.Navigator 
        screenOptions={{
            headerShown: false,
            headerMode: 'screen',
        }}
    >
      <Stack.Screen component={SplashScreen} name='SplashScreen' />
      <Stack.Screen component={LoginScreen} name='LoginScreen' />
    </Stack.Navigator >
  )
}

export default AppStackNavigation;

