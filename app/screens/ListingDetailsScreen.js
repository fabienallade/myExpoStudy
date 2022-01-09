import React from "react";
import { Text, StyleSheet, Platform, View } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import AppListItem from "../components/lists/AppListItem";
import { Image } from "react-native-expo-image-cache";

function ListingDetailsScreen({ route }) {
  const listing = route.params
  return (
    <View>
      <Image
        style={styles.image}
        uri={listing.images}
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.subtitle}>£{listing.price}</AppText>
      </View>
      <AppListItem
        image={require("../assets/myimage.jpg")}
        title="allade fabien O."
        subtitle="5 listing"
      ></AppListItem>
    </View>
  );
}
const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:300
    },
    detailsContainer:{
        padding:20
    },title:{
      color:colors.black,
        fontSize:24,
        fontWeight:"500"
    },subtitle:{
        color:colors.secondary,
        fontWeight:"bold",
        fontSize:20,
        marginVertical:10
    }
});
export default ListingDetailsScreen;
