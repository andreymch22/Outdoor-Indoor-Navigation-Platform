import React, { useState } from 'react';
import Main from './src/components/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/Login';
import MapScreen from './src/components/MapScreen';


//Imports necesarios para firebase/////////////////
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';


import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();


///////////////////////////////////////////////////
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="MapScreen" component={MapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

