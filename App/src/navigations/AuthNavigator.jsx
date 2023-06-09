import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS, ROUTES } from '../../constants';
import {Login, AppBar, MapScreen} from '../components';


const Stack = createStackNavigator();

//cambiar el initialRouteName a Login cuando se terminen los testing
function AuthNavigator() {
    console.log(Stack);
    return (
        <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.LOGIN}>
            <Stack.Screen
                name={ROUTES.LOGIN}
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTES.MAP_SCREEN}
                component={MapScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
} 

export default AuthNavigator;
