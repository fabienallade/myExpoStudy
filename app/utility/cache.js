import {AsyncStorage} from "react-native"
import moment from "moment"

const prefix = 'cache'
const expireInMinute = 5

const store = async (key,value) =>{
    try {
        const item={
            value,
            timestamps:Date.now()
        }
        await AsyncStorage.setItem(prefix+key,JSON.stringify(value))
    } catch (error) {
        console.log(error)
    }
   
}

const get = async (key)=>{
    try {
        const value =await AsyncStorage.getItem(prefix+key)
        const item = JSON.parse(value)

        if (!item) return null

        const now = moment(Date.now())
        const storedtime = moment(item.timestamps)
        const isExpired = now.diff(storedtime, "minutes") > 5;

        if (isExpired) {
            await AsyncStorage.removeItem(prefix+key)
            return null
        }

        return item.value

    } catch (error) {
        console.log(error)
    }
}

export default{
    store,
    get
}