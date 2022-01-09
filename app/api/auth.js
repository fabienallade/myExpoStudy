import client from "./client";

const login = (email,password)=>{
   return client.post('/auth/jwt',{username:email,password})
}
const register = (userInfo)=>{
    return client.post("/auth/jwt/register",userInfo)
}
export default {
    login,
    register
}