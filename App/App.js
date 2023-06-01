import React, { useState } from 'react';
import Main from './src/components/Main';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/components/Login';
import MapScreen from './src/components/MapScreen';


export default function App() {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
}

