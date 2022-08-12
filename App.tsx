import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigation from './src/navigation/AppStackNavigation';


const App = () => {
  return (
    <NavigationContainer>
      <AppStackNavigation />
    </NavigationContainer>
  )
}

export default App;