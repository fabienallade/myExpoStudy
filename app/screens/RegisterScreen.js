import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppForm, AppFormField, AppSubmitButton, AppErrorsMessage } from '../components/forms'
import AppScreen from '../components/AppScreen';
import * as Yup from 'yup'
import authApi from '../api/auth'
import authStorage from "../auth/storage"
import AuthContext from "../auth/context"
import jwtDecode from "jwt-decode";
import AppActivityIndicator from '../components/AppActivityIndicator';

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  password2: Yup.string().required().min(4).label("Password"),
});
export default function RegisterScreen() {
  const [registerError, setregisterError] = useState("")
  const [errorVisible, seterrorVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const authcontext = useContext(AuthContext);

  const handleRegister = async (values)=>{
    setLoading(true)
    const result = await authApi.register(values)
    if(!result.ok){
      seterrorVisible(true)
      setregisterError(result.originalError.message)
    }else{
      seterrorVisible(false)
      const user = authStorage.getUser();
      console.log(user);
      authcontext.setuser(user);
      authStorage.storeToken(result.data.token);
    }
    setLoading(false)
  }
    return (
      <>
      <AppActivityIndicator visible={loading} />
      <AppScreen>
        <AppForm
          initialValues={{
            username: "",
            email: "",
            password: "",
            password2: "",
          }}
          onSubmit={handleRegister}
          validationSchema={validationSchema}
        >
          <AppErrorsMessage error={registerError} visible={errorVisible} />
          <AppFormField
            name="username"
            icon="account"
            placeholder="Username"
            autoCorrect={true}
            autoCapitalize="none"
            maxLength={255}
          />
          <AppFormField
            name="email"
            icon="email"
            placeholder="Email"
            autoCorrect={true}
            autoCapitalize="none"
            maxLength={255}
          />
          <AppFormField
            name="password"
            icon="key"
            placeholder="Password"
            autoCorrect={true}
            autoCapitalize="none"
            maxLength={255}
            secureTextEntry={true}
          />
          <AppFormField
            name="password2"
            icon="key"
            placeholder="Repeat Password"
            autoCorrect={true}
            autoCapitalize="none"
            maxLength={255}
            secureTextEntry={true}
          />
          <AppSubmitButton title="Register" color="primary" />
        </AppForm>
      </AppScreen>
      </>
    );
}

const styles = StyleSheet.create({})
