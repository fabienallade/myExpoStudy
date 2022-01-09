import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function AppListItemDeleteAction({onPress}) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name="trash-can"
            size={35}
            color={colors.white}
          ></MaterialCommunityIcons>
        </View>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
       alignItems:"center",
        justifyContent:"center",
        backgroundColor:colors.red,
        width:70,
        height:"100%"
    }
})
