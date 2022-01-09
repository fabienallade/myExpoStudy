import React,{useState, useContext} from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButtons";
import { Formik } from "formik";
import * as Yup from "yup"
import AppText from "../components/AppText";
import AppErrorsMessage from "../components/forms/AppErrorsMessage";
import AppFormField from "../components/forms/AppFormField";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import AppForm from "../components/forms/AppForm";
import authApi from "../api/auth";
import jwtDecode from 'jwt-decode'
import AuthContext from "../auth/context";
import authStorage from "../auth/storage"


const validationSchema =Yup.object().shape(
    {
        email:Yup.string().required().email().label("Email"),
        password:Yup.string().required().min(4).label("Password")
    }
)

export default function LoginScreen() {
  const authcontext = useContext(AuthContext)
  const [errorVisible, setErrorVisible] = useState(false)
  const handleSubmit = async ({email,password})=>{
    const result=await authApi.login(email,password)
    if(!result.ok){
      console.log(result);
     return setErrorVisible(true)
    }else{
      setErrorVisible(false)
      const user = jwtDecode(result.data.token);
      authcontext.setuser(user)
      authStorage.storeToken(result.data.token)
    }
  }
  return (
    <AppScreen style={styles.container}>
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      </View>
      <AppErrorsMessage error="Invalid email or password" visible={errorVisible} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
            <AppFormField
              autoCapitaize="none"
              autoCorrect={false}
              placeholder="Email"
              icon="email"
              name="email"
              keyboardType="email-address"
            />
            <AppFormField
              autoCapitaize="none"
              autoCorrect={false}
              placeholder="Password"
              name="password"
              icon="lock"
              secureTextEntry
            />
            <AppSubmitButton title="Login" color="danger" />
      </AppForm>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  logocontainer: {
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    width:150,
    height:150
  },
});
