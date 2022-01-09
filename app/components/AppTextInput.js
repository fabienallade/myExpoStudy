import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from "../config/styles"

export default function AppTextInput({icon,width="100%",...otherProps}) {
    return (
      <View style={[styles.container,{width}]}>
        {icon && <MaterialCommunityIcons name={icon}
        style={styles.icon}
        color={colors.graytitle}
         size={30} />}
        <TextInput style={defaultStyles.text} {...otherProps}></TextInput>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.graylight,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon:{
    marginRight:10
  }
});
