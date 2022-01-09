import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import {MaterialCommunityIcons } from "@expo/vector-icons"
import AppText from "../AppText";
import colors from "../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

function AppListItem({
  image,
  subtitle,
  title,
  onPress,
  AppImageComponent,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.graylight} onPress={onPress}>
        <View style={styles.container}>
          {AppImageComponent}
          {image && <Image source={image} style={styles.image}></Image>}
          <View style={styles.listDetailsContainer}>
            <AppText style={styles.title} numberOfLine={1}>
              {title}
            </AppText>
            {subtitle && <AppText style={styles.subtitle} numberOfLine={2}>{subtitle}</AppText>}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={colors.graytitle}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    flexDirection: "row",
    padding: 10,
    backgroundColor:colors.white
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  listDetailsContainer: {
    flex:1,
    padding: 5,
    marginLeft:10,
    justifyContent:"center"
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: colors.graytitle,
  },
});
export default AppListItem;
