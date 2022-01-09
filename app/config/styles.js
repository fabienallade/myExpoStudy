import {Platform} from 'react-native'
import colors from "./colors"
export default {
    text:{
    width:"100%",
    color:colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
  }
}