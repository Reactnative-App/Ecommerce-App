import { StyleSheet } from "react-native";
import { WIDTH, scaleFont, scaleSize } from "../Constants/Mixins";
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
        paddingTop:50,
        marginHorizontal:scaleSize(20),
        justifyContent: 'space-between',
    },
    details:{
        marginTop:10,
    },
    // headerContainer:{
    //     width:"100%",
    //     height:122
    // },
    headerContainer: { 
        marginLeft:15,
        marginTop:15,
        marginBottom:5,
        width: 325,
        height: 222,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius:10
      },
    titleRow:{
        marginHorizontal:20,
        justifyContent: 'space-between',
        flexDirection: "row",
        height:20,
        top:50
    },
    title:{
        fontFamily:"Blinker-Regular",
        fontSize: 10,
        color:'gray'
    },
    title2:{
        fontFamily:"Blinker-Regular",
        fontSize:10,
        color:'#000'
    },
    priceWrapper:{
        backgroundColor:COLORS.secondary,
        borderRadius:15
    },
    price:{
        padding:10,
        fontFamily:"Blinker-Regular",
        fontSize:20,
        color:'#000'
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
        marginHorizontal:15,
        color:'#000', 
        gap: 10
    },
    txt:{
        fontSize:16,
        fontFamily:'Blinker-Regular', 
        color:'#000'
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
       },
    sizesRow:{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 6,
        marginTop: 6,
    },
    customSizes:{
        flex: 1,
        fontSize: 12,
        fontFamily:'regular',
        color: '#000',
    },
    sizeTop:{
        marginTop:22,
        // marginHorizontal:22
    },
    sizeDirection:{
        flexDirection: "row", 
        alignItems: "center" 
    },
    horizontal:{
        marginTop:22,
        width:"100%",
        borderBottomColor: COLORS.lightgrey,
        borderBottomWidth: 1,
    },
    descTab:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: scaleSize(20),
    },
    descTxt:{
        marginRight:scaleSize(10),
       // fontFamily:'regular',
        fontSize:scaleFont(10),
        color:'#000'
    },
    textContainer:{
        flex: 1,
        marginHorizontal: 12,
    }
});

export default styles;