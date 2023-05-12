import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

//firebase/////////////////
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
//import { firebaseConfig } from './firebase-config';

import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

////////////////////////////

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Outdoor/Indoor Navigation Platform</Text>
      <StatusBar style="auto" />
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '95%',
    height: '90%',
  },
});
