import React, { useState } from 'react';
import Main from './src/components/Main';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/components/Login';
import MapScreen from './src/components/MapScreen';


//firebase/////////////////
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
//import { firebaseConfig } from './firebase-config';

import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

////////////////////////////

export default function App() {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
}

