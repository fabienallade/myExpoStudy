import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from "@expo/vector-icons";

function ViewImageScreen(props){
    return (
      <View style={styles.container}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" size={32} color={colors.white} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons name="trash-can-outline" size={32} color={colors.danger} />
        </View>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/covertest.jpg")}
        ></Image>
      </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.black,
    },
    closeIcon:{
        width:50,
        height:50,
        position:"absolute",
        top:40,
        left:30
    },
    deleteIcon:{
        position: "absolute",
        top: 40,
        right: 30
    },
    image: {
        width:'100%',
        height:'100%',
    }
});
export default ViewImageScreen;
