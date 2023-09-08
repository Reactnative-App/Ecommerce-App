import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../Constants/theme";

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fffdf6'
    },
    wishListHeader: {
        width: '100%',
        flexDirection: 'row',
        paddingTop:60,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
    },
    details:{
        marginTop:10,
    },
    titleRow:{
        marginHorizontal:20,
        justifyContent: 'space-between',
        flexDirection: "row",
        height:20,
        top:50
    },
    title:{
        fontFamily:"regular",
        fontSize:12
    },
    priceWrapper:{
        backgroundColor:COLORS.secondary,
        borderRadius:15
    },
    price:{
        padding:10,
        fontFamily:"regular",
        fontSize:20
    },
    ratingRow:{
        paddingBottom:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:70,
        top:10
    },
    rating:{
        top:20,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginHorizontal:15
    },
    txt:{
        fontSize:16,
        fontFamily:'semibold'
    },
    verticleLine:{
        height: '60%',
        width: 1,
        backgroundColor: '#D9D9D9',
        marginTop:10,
        marginLeft:-15 
       },
       miniHead:{
        flexDirection:'row',
        gap:5
       },
       descriptionWrapper:{
        marginTop:20,
        marginHorizontal:20
       },
       descTxt:{
       fontFamily:'regular',
       fontSize:12
       }
});

export default styles;