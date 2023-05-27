import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Main from './src/components/MapScreen';
import Login from './src/components/Login'
import MapScreen from './src/components/MapScreen';


//firebase/////////////////
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
//import { firebaseConfig } from './firebase-config';

import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

////////////////////////////

export default function App() {
  var flag = 1 // false= 0
  if (flag) {
    return <Login />
  } else {
    return <MapScreen />
  }
}

