import { StyleSheet } from "react-native";

// import { COLORS, SIZES } from "../Constants/theme";

const styles = StyleSheet.create({
    container:{
       flex:1
    },
    upperRow:{
        width: '100%',
        flexDirection: 'row',
        paddingTop:60,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        position:'absolute',
        zIndex:999
    },
    image:{
        width:"100%",
    },
    btnSection:{
        flexDirection:"row",
        justifyContent:"space-around", 
        alignItems:"center", 
        marginTop:30,
        marginHorizontal:20
    },
    btnFilter:{
        padding:15,
        backgroundColor:"#F3D743",
        borderRadius:24,
        width:157
    },
    btnSort:{
        padding:15,
        backgroundColor:"#fff",
        borderRadius:24,
        width:157
    },
    btnText:{
        color:'#000',
        textAlign:'center',
        fontFamily:'regular',
        fontSize:14
    },

});

export default styles;