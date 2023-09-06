import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../Constants/theme";

const styles = StyleSheet.create({
    container:{
       width:157,
       height:200,
       marginEnd:22,
       borderTopLeftRadius:20,
       borderTopRightRadius:20,
       backgroundColor:COLORS.white,
       elevation:0.25,
       shadowOpacity: 0.25,
   },
   imageContainer:{
    flex:1,
    width:157,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    overflow:"hidden"
   },
   details:{
    paddingVertical:5,
    paddingLeft:15
   },
   title:{
    fontFamily:"regular",
    fontSize:10,
    color:COLORS.gray
   },
   supplier:{
    fontFamily:"regular",
    fontSize:12,
   },
   price:{
    fontFamily:"semibold",
    fontSize:14,
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