import { StyleSheet } from "react-native";
import { scaleSize, scaleFont } from "../Constants/Mixins";

// import { COLORS, SIZES } from "../Constants/theme";

const styles = StyleSheet.create({
    appWrapper:{
        marginHorizontal: scaleSize(10),
        marginTop:scaleSize(15),
    },
    appBar:{marginLeft:scaleSize(12),
      marginRight:scaleSize(15),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    iconAlig:{
        flexDirection:'row',
        gap:10,
    },
    txt:{
      fontSize:scaleFont(24),
      fontFamily:"Blinker-Regular",
      fontSize: scaleFont(24),
      color:'#000'
    },
    centerTxt: {
      marginTop:scaleSize(10),
      fontSize: scaleSize(16),
      fontFamily: 'Blinker-Regular',
      paddingVertical: 16 / 2,
      paddingHorizontal: scaleSize(16),
      borderRadius: scaleSize(16),
      backgroundColor: '#000',
      color: '#ffffff',
      justifyContent:"center",
      alignItems:"center"
  },
  btn:{
      backgroundColor:"#000",
      height:scaleSize(40),
      width:scaleSize(325),
      marginTop:scaleSize(20),
      alignSelf:'center',
      borderRadius:scaleSize(25),
      justifyContent:"center",
      alignItems:"center",
      marginBottom:scaleSize(20)
  },
  verticalLine:{
    width:1,
    height:'100%',
    color:"black"
  },
  homeFooter:{
     marginTop:scaleSize(20),
    flexDirection: "row", 
    alignItems:'center',
    backgroundColor:'#f1f1f1',
    height:scaleSize(40),
    borderRadius:scaleSize(10),
    padding:scaleSize(5),
     marginBottom:scaleSize(80)
  },
  imgSizes:{
    flexDirection: "row", 
    alignItems:'center'
  },
  paddVert:{
    // paddingBottom:120,
    // backgroundColor:'#fff'
  },
  verticleLine:{
    height: '100%',
    width:scaleSize(1),
    backgroundColor: '#000',
   },
  //  container: {
  //   flex: 1,
  //   backgroundColor: '#000',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // textContainer: {
  //   marginVertical: 10,
  // },
  // text: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
 },
 // Other styles

 cashOnDeliveryText: {
    fontSize: scaleFont(18),
    fontWeight: 'bold',
    color: '#fff',
 },
});

export default styles;