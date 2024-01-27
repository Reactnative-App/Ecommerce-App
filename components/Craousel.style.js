import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../Constants/theme";

const styles = StyleSheet.create({
    craouselContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginHorizontal:22
    },
    craouselText:{
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom:0,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    cslText:{
        fontFamily:'Blinker-Bold',
        fontSize:30,
        color:'#fff',
        textTransform:'uppercase'
    },
    discountRow:{
        flexDirection:'row',
        justifyContent:'center',
        marginHorizontal:22,
        gap:10,
        marginTop:15
    },
    discountBox:{
        height:105,
        width:160,
        borderRadius:15,
        backgroundColor:'#f3d743',
    },
    offerBox:{
        height:105,
        width:160,
        borderRadius:15,
        backgroundColor:'#000',
    },
    disText:{
        position:'absolute',
        top: 8, 
        left: 8, 
        right: 0, 
        bottom:0,
        fontFamily:'Blinker-Bold',
        fontSize:14,
        color:'#000'
    },
    offText:{
        position:'absolute',
        top: 8, 
        left: 8, 
        right: 0, 
        bottom:0,
        fontFamily:'Blinker-Bold',
        fontSize:14,
        color:'#fff'
    },
    disNum:{
        position:'absolute',
        top: 35, 
        left: 90, 
        right: 0, 
        bottom:0,
        fontFamily:'Blinker-Light',
        fontSize:50, 
        color:'#000'
    },
    offNum:{
        position:'absolute',
        top: 35, 
        left: 90, 
        right: 0, 
        bottom:0,
        fontFamily:'Blinker-Light',
        fontSize:50, 
        color:'#fff'
    }
});

export default styles;