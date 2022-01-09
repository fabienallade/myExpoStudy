import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Button, Image } from "react-native";
import { NavigationContainer, useNavigation} from "@react-navigation/native"
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AppOfflineNotice from "./app/components/AppOfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import AuthStorage from "./app/auth/storage"
import {AppLoading} from "expo"


export default function App() {
  const [user, setuser] = useState()
  const [isReady, setisReady] = useState(false)

  const restoreUser = async ()=>{
    const userVerified = await AuthStorage.getUser()
    setuser(userVerified);
  }

  if(!isReady)
    return <AppLoading startAsync={restoreUser} onFinish={()=>setisReady(true)}/>

  return (
    <AuthContext.Provider value={{ user, setuser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator />: <AuthNavigator /> }
      </NavigationContainer>
      <AppOfflineNotice />
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
