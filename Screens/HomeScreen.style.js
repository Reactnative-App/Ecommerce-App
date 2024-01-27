import { StyleSheet } from "react-native";

// import { COLORS, SIZES } from "../Constants/theme";

const styles = StyleSheet.create({
    appWrapper:{
        marginHorizontal:10,
        marginTop:15,
    },
    appBar:{marginLeft:12,
      marginRight:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    iconAlig:{
        flexDirection:'row',
        gap:10,
    },
    txt:{
      fontSize:24,
      fontFamily:"Blinker-Regular",
      fontSize: 24,
      color:'#000'
    },
    centerTxt: {
      marginTop:10,
      fontSize: 16,
      fontFamily: 'regular',
      paddingVertical: 16 / 2,
      paddingHorizontal: 16,
      borderRadius: 16,
      backgroundColor: '#000',
      color: '#ffffff',
      justifyContent:"center",
      alignItems:"center"
  },
  btn:{
      backgroundColor:"#000",
      height:40,
      width:325,
      marginTop:20,
      alignSelf:'center',
      borderRadius:25,
      justifyContent:"center",
      alignItems:"center",
      marginBottom:20
  },
  verticalLine:{
    width:1,
    height:'100%',
    color:"black"
  },
  homeFooter:{
     marginTop:20,
    flexDirection: "row", 
    alignItems:'center',
    backgroundColor:'#f1f1f1',
    height:40,
    borderRadius:10,
    padding:5,
    // marginBottom:80
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
    width: 1,
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
 },
});

export default styles;