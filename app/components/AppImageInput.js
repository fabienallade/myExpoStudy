import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert(
        "Delete",
        "Etes vous sur de vouloir supprimer ce fichier ??",
        [{ text: "yes", onPress: () => onChangeImage(imageUri) }, { text: "No" }]
      );
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
        console.log(result);
      }
    } catch (error) {
      console.log(error, "ok");
    }
  };
  const requestPermission = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA);
    if (!result.granted) {
      alert("nous avons besoin de l'une de vos permissions pour commencer");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.graytitle}
            name="camera"
            size={30}
          />
        )}
        {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.graylight,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 100,
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
