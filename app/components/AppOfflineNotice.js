import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import constant from 'expo-constants'
import {useNetInfo} from "@react-native-community/netinfo"


export default function AppOfflineNotice() {
    const netInfo = useNetInfo()
    if(netInfo.type !== "unknown"
    && !netInfo.isInternetReachable)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                No Internet Conexion
            </Text>
        </View>
    )

    return null
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.danger,
        height:50,
        position:"absolute",
        zIndex:1,
        top:constant.statusBarHeight,
        width:"100%"
    },
    text:{
        color:colors.white
    }
})