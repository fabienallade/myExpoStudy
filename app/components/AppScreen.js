import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'
export default function AppScreen({children,style}) {
    return (
        <SafeAreaView style={[styles.screen,style]}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen:{
        paddingTop:Constants.statusBarHeight,
        flex:1
    },
    view:{
        flex:1
    }
})
