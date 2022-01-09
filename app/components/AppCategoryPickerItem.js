import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AppIcon from './AppIcon'
import AppText from './AppText'

export default function AppCategoryPickerItem({item,onPress}) {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View>
          <AppIcon
            name={item.icon}
            backgroundColor={item.backgroundColor}
            size={80}
          />
          <AppText style={styles.text}>{item.label}</AppText>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        paddingVertical:15,
        width:"33%"
    },text:{
        marginTop:5,
        textAlign:"center"
    }
})
