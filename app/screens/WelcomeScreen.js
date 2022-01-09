import React from 'react';
import {ImageBackground, StyleSheet, View, Image,Text} from 'react-native';
import colors from '../config/colors';
import AppButton from '../components/AppButtons';



export default function WelcomeScreen({navigation}) {
    return (
      <ImageBackground
          // blurRadius={5}
        style={styles.background}
        source={require("../assets/love5.jpg")}
      >
        <View style={styles.logoContainer}>
          {/* <Image
            style={styles.logo}
            source={require("../assets/logo.jpg")}
          ></Image>
          <Text style={styles.logoTextUnder}>
            Faire ces rapport plus rapidement
          </Text> */}
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title="login"
            color="danger"
            onPress={() => navigation.navigate("Login")}
          />
          <AppButton
            title="Register"
            color="secondary"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems:"center"
    },
    logoContainer:{
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    buttonContainer:{
        width:"100%",
        padding:20
    },
    logoTextUnder:{
        color:"white"
    },
    logo: {
        width: 100,
        height: 100,
    }
});

