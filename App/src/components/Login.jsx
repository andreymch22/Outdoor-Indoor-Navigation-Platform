import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Text, Alert, View, TouchableOpacity, Image } from 'react-native';
import MapScreen from './MapScreen';
import AppBar from './AppBar';
import Logo from '../../src/assets/Logo.png';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';
import { getAuth, signInWithCredential, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
    //variables para guardar el mail y el password
    const [mail, onChangeMail] = React.useState('');                              
    const [password, onChangePassword] = React.useState('');
    const navigation = useNavigation();
    //const history = useHistory();


    //Dos funciones, 1 para crear la cuenta y otra para el login
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    //función para inicio de sesión
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, mail, password)
        .then((userCredential) => {
            console.log('Inicio de sesión correcto.')
            const user = userCredential.user;//guarda las credenciales en la variable user
            console.log(user)
            navigation.navigate('MapScreen');
        })
        .catch(error => {
            console.log(error)
            Alert.alert(error.message)
        })
    }

    //funcion crear cuenta pendiente, falta bot[on de crear cuenta


    //////////////////////////////////////////////////////////




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
                    onChangeText={onChangeMail} //lo que se reciba en el TextInput, lo guardara en la variable onChanceMail
                    value={mail}
                    placeholder="Correo electronico"
                    keyboardType='email-address'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}//lo que se reciba en el TextInput, lo guardara en la variable onChancePassword
                    value={password}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                />
                <Button
                    title="Ingresar"
                    //onPress={() => <MapScreen />}
                    //onPress={() => Alert.alert('Simple Button pressed')}
                    onPress={handleSignIn} // Al presionar el botón llama la función de handleSignIn
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