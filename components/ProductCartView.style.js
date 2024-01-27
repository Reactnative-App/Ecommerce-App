import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../Constants/theme";

const styles = StyleSheet.create({
    container:{
       width:157,
       height:200,
       marginEnd:22,
       borderRadius:20,
       backgroundColor:'#fff',
       elevation:5,
       shadowOpacity: 0.25,
       marginBottom:20
   },
   imageContainer:{
    flex:1,
    width:157,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    overflow:"hidden"
   },
   details:{
    paddingVertical:15,
    paddingLeft:15
   },
   title:{
    fontFamily:"Blinker-Regular",
    fontSize:10,
    color:COLORS.gray
   },
   supplier:{
    fontFamily:"blinker-Regular",
    fontSize:12,
    color:'#000'
   },
   price:{
    fontFamily:"Blinker-SemiBold",
    fontSize:14,
    color:'#000'
   },
   addBtn:{
    position:"absolute",
    bottom:160,
    right:SIZES.xSmall,
    height:25,
    width:25,
   }
});
export default styles;