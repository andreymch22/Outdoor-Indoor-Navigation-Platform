import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar.jsx';
import Login from './Login.jsx';
import MapScreen from './MapScreen.jsx';

const Main = () => {
    return (
        <View >
            <Login />
        </View>
    )
}

export default Main;