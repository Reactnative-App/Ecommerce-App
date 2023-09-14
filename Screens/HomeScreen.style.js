import { StyleSheet } from "react-native";

// import { COLORS, SIZES } from "../Constants/theme";

const styles = StyleSheet.create({
    appWrapper:{
        marginHorizontal:30,
        marginTop:15,
    },
    appBar:{
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
      fontFamily:"regular"
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
      alignItems:"center"
  },
  verticalLine:{
    width:1,
    height:'100%',
    color:"black"
  },
  homeFooter:{
    flexDirection: "row", 
    justifyContent: "space-evenly"
  }
});

export default styles;