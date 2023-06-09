import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { COLORS } from '../../constants';

const MapScreen = () => {
    const [text, setText] = useState('');
    const markers = [//10.360665878914215, -84.50969574990965
        { title: 'Pepe el pollo', latlng: { latitude: 10.359986540409969, longitude: -84.50895133909639 }, dcp: 'Holamundo' },
        { title: 'biblio', latlng: { latitude: 10.360665878914215, longitude: -84.50969574990965 }, dcp: 'Holo' },

    ]
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
            <MapView style={styles.map} camera={camera} >
                {polylines()}
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.latlng}
                        title={marker.title}
                    />))}
            </MapView>
        </View>
    );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
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

const polylines = () => {
    return (
        <Polyline
            coordinates={[
                { latitude: 10.359986540409967, longitude: -84.50895133909636 },
                { latitude: 10.360798068662506, longitude: -84.50943509940575 },
                { latitude: 10.360686264935225, longitude: -84.50963515686674 },
            ]}
            strokeWidth={4}
            strokeColor='#000'
        />
    )
}

const markers = (markers) => {
    return (
        markers.map((marker, index) => (
            <Marker
                key={index}
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.dcp}
            />
        ))
        /*<Marker 
        coordinate={{latitude: 10.359986540409969, longitude: -84.50895133909639}}
        title='Pepe el pollo'
        />*/

    )
}
export default MapScreen;