import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AppText from './AppText';
import colors from '../config/colors';


export default function AppPickerListItem({item,onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <AppText style={styles.text}>
                {item.label}
            </AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        flex:1
    },
    text:{
        padding:20,
        backgroundColor:colors.white,
        marginBottom:10
    }
})
