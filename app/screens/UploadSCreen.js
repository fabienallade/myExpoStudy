import React from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'
import AppText from '../components/AppText'
import * as Progress from "react-native-progress"
import colors from '../config/colors';
import LottieView from "lottie-react-native"

export default function UploadSCreen({progress = 0,visible =false,onDone}) {
    return (
      <Modal visible={visible}>
        <View style={styles.container}>
        {
            progress < 1 ? (
            <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
        />
            ) : (
                <LottieView 
                autoPlay
                loop={false}
                style={styles.animation}
                onAnimationFinish={onDone}
                source={require("../assets/animations/done.json")} />
            )
        }
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },animation:{
        width:500,
        height:500
    }
})