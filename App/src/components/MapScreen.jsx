import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = () => {
    const [text, setText] = useState('');

    const handleInputChange = (inputValue) => {
        setText(inputValue);
    };
    return (
        <View style={styles.container}>
            <Text>Outdoor/Indoor Navigation Platform</Text>
            <View style={stylesS.container}>
                <TextInput
                    style={stylesS.input}
                    placeholder="Search destination"
                    value={text}
                    onChangeText={handleInputChange}
                />
            </View>
            <StatusBar style="auto" />
            <MapView style={styles.map} camera={camera} />
        </View>
    );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faebd7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '95%',
        height: '85%',
    },
});
const stylesS = StyleSheet.create({
    container: {
        width: width - 20,
        padding: 0,
        backgroundColor: '#fff',
        borderRadius: 15,
        margin: 10,
    },
    input: {
        height: 40,
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 10,
    },
});

//10.36302235879384, -84.51058163568169
const initialRegion = {
    latitude: 10.36302235879384,
    longitude: -84.51058163568169,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
};

const camera = {
    center: {
        latitude: 10.36302235879384,
        longitude: -84.51058163568169,
    },
    heading: -30,
    pitch: 35,
    zoom: 17,
};
export default MapScreen;