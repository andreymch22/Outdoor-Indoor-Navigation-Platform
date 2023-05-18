import React from "react"
import { View, StyleSheet, Text, ScrollView, TouchableWithoutFeedback } from "react-native"
import Constants from 'expo-constants'
import { Link, useLocation } from "react-router-native"

const AppBar = () => {
    return(
        <View style={styles.container} >
            <ScrollView horizontal style={styles.scroll} >
                <AppBarTab to='/MapScreen'>Map Screen</AppBarTab> 
                <AppBarTab to='/'>Sing Up</AppBarTab> 
            </ScrollView>
        </View>
    )
}

const AppBarTab = ({children, to}) => {
    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <Text style={styles.text}>
                {children}
            </Text>
        </Link>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10,
    },
    text:{
        color: 'gray',
        paddingHorizontal: 10
    },
    scroll:{
        paddingBottom: 15
    },
    active:{
        color: '#fff'
    }
})

export default AppBar

