import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

export default function AppActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/activit.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  overlay:{
    height:"100%",
    width:"100%",
    position:"absolute",
    backgroundColor:"white",
    zIndex:1,
    opacity:0.5
  }
});
