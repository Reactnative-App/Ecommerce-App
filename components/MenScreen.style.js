import { StyleSheet } from "react-native";
import { WIDTH, scaleFont, scaleSize } from "../Constants/Mixins";
// import { COLORS, SIZES } from "../Constants/theme";

const styles = StyleSheet.create({
    container:{
       flex:1,
     
    },
    upperRow:{
        width: '100%',
        flexDirection: 'row',
        paddingTop:scaleSize(50),
        paddingHorizontal: scaleSize(20),
        justifyContent: 'space-between',
        position:'absolute',
        zIndex:999
    },
    image:{marginTop: scaleSize(30),
        width:"100%",
    },
    btnSection:{
        flexDirection:"row",
        justifyContent:"space-around", 
        alignItems:"center", 
        marginTop:scaleSize(30),
        marginHorizontal:scaleSize(20)
    },
    btnFilter:{
        padding:scaleSize(15),
        backgroundColor:"#F3D743",
        borderRadius:24,
        width:157
    },
    btnSort:{
        padding:scaleSize(15),
        backgroundColor:"#fff",
        borderRadius:24,
        width:157
    },
    btnText:{
        color:'#000',
        textAlign:'center',
        fontFamily:'Blinker-Regular',
        fontSize:scaleSize(14)
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalContent: {
        backgroundColor: '#fff',
        paddingHorizontal: scaleSize(20),
        paddingVertical: scaleSize(30),
        borderRadius: 10,
        width: '100%',
        //height: '50%',
        //overflow: 'auto',
      },
      checkboxContainer: {
        marginBottom: scaleSize(20),
      },
      checkboxItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: scaleSize(15),
      },
      closeButton: {
        alignSelf: 'center',
        marginTop:scaleSize( 20),
        color: '#333',
        fontFamily: 'Blinker-Regular',
      },
      priceRangeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scaleSize( 10),
        color: '#333',
      },
      priceRangeText: {
        marginRight: scaleSize(10),
        fontSize: scaleFont( 16),
      },
      priceRangeValues: {
        marginLeft:scaleSize( 10),
        fontSize:scaleFont( 16),
      },
      sizeDirection:{
        flexDirection: "row", 
        alignItems: "center", 
        
    },
    customSizes:{
      flex: 1,
      fontSize: scaleSize(20),
      fontFamily:'Blinker-SemiBold',
      color: '#000',
      paddingBottom:'3%',
      paddingLeft:'5%',
      marginTop: scaleSize(20),
      marginBottom: scaleSize(10)
  },
  sizesRow:{
    flexDirection: "row",
    flexWrap: "wrap",
    gap: scaleSize(4),
    marginTop: scaleSize(6),
    paddingLeft: '5%',
    paddingTop: '5%',
    paddingBottom:'5%', 
    backgroundColor: '#FAF9F6',
    width: '100%',
},



customSlider:{
  paddingLeft: '8%',
  // flexDirection: "row",
  // flexWrap: "wrap",
  marginTop: scaleSize(6),
  backgroundColor: '#FAF9F6',
  width: '100%',
},
// customRow:{
//     fontSize: scaleFont(20),
//     fontWeight: 'bold',
//     color: '#000', 
//     width: '100%',
//     flexDirection: "row",
//     justifyContent: 'center',
//     }
});

export default styles;