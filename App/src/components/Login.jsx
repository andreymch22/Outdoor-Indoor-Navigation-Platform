import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Text, Alert, View, TouchableOpacity, Image } from 'react-native';
import MapScreen from './MapScreen';
import AppBar from './AppBar';
import Logo from '../../src/assets/Logo.png';

const Login = () => {
    const [mail, onChangeMail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    //const history = useHistory();
    return (
            <View style={styles.container}>
                <View style={{alignItems: 'center', backgroundColor: 'white'}}>
                    <Image                        
                        style={styles.logo}
                        source={require('../../src/assets/Logo.png')}
                    />
                </View>
                <Text style={styles.title}>Ingresar a Navegación TecSC</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeMail}
                    value={mail}
                    placeholder="Correo electronico"
                    keyboardType='email-address'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                />
                <Button
                    title="Ingresar"
                    //onPress={() => <MapScreen />}
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
                <Separator />

                <TouchableOpacity style={styles.googleBtn}>
                    <Image
                        source={{ uri: 'https://w7.pngwing.com/pngs/869/485/png-transparent-google-logo-computer-icons-google-text-logo-google-logo.png' }}
                        style={styles.buttonImageIconStyle}
                    />
                    <Text style={styles.text}> Ingresar con Google </Text>
                </TouchableOpacity>
            </View>
    );
};

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 14,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        paddingVertical: 30,
        marginVertical: 1,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    separator: {
        marginVertical: 30,
        borderBottomColor: '#737373',
        borderBottomWidth: 2,
    },
    googleBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: 'grey',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonImageIconStyle: {
        paddingLeft: 20,
        margin: 5,
        height: 30,
        width: 30,
    },
    logo:{
        width: 140,
        height: 135,
    }

});

export default Login;