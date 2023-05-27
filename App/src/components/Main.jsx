import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar.jsx';
import { Routes, Route } from 'react-router-native';
import Login from './Login.jsx';

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Login />
            <Routes>
                <Route path='/MapScreen' element={<MapScreen />} />
                <Route path='/' element={<Login />} />
            </Routes>
        </View>
    )
}

export default Main;