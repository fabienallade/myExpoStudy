import * as SecureStore from 'expo-secure-store'
import jwtDecode from 'jwt-decode'

const key = 'authtoken'
const storeToken = async (authtoken)=>{
    try {
     await SecureStore.setItemAsync(key, authtoken);   
    } catch (error) {
        console.log(error);
    }
}

const getToken = async ()=>{
    try {
        return await SecureStore.getItemAsync(key)
    } catch (error) {
        console.log(error);
    }
}

const removeToken = async ()=>{
    try {
       await SecureStore.deleteItemAsync(key);  
    } catch (error) {
        console.log(error);
    }
}
const getUser = async ()=>{
    const token = await getToken()
    if(token) return jwtDecode(token)
    return null
}

export default {
    getToken,
    getUser,
    storeToken,
    removeToken
}