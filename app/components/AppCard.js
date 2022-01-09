import React from "react";
import { Text, StyleSheet, Platform, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Image } from "react-native-expo-image-cache";

function AppCard({ title,subtitle,image,onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image uri={image} style={styles.image} tint="light"></Image>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subtitle} </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:20,
        overflow:"hidden"
    },
    image:{
        width:"100%",
        height:200
    },
    detailsContainer:{
        padding:20,
    },
    title:{
       marginBottom:7
    },
    subTitle:{
        color:colors.secondary,
        fontWeight:"bold"
    }
});
export default AppCard;
