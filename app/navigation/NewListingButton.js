import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from '../config/colors'
import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function NewListingButton({onPress}) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <MaterialCommunityIcons name="plus" color="white" size={40} />
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:colors.primary,
        height:80,
        width:80,
        borderRadius:50,
        bottom:30,
        borderColor:colors.white,
        borderWidth:10
    }
})