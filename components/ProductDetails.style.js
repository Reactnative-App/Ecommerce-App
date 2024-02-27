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
        marginTop:scaleSize(10),
    },
    // headerContainer:{
    //     width:"100%",
    //     height:122
    // },
    headerContainer: { 
        marginLeft:scaleSize(15),
        marginTop:scaleSize(15),
        marginBottom:scaleSize(5),
        width: 325,
        height: 222,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius:scaleSize(10)
      },
    titleRow:{
        marginHorizontal:scaleSize(20),
        justifyContent: 'space-between',
        flexDirection: "row",
        height:20,
        top:scaleSize(50)
    },
    title:{
        fontFamily:"Blinker-Regular",
        fontSize: scaleFont(10),
        color:'gray'
    },
    title2:{
        fontFamily:"Blinker-Regular",
        fontSize:scaleFont(10),
        color:'#000'
    },
    priceWrapper:{
        backgroundColor:COLORS.secondary,
        borderRadius:scaleSize(15)
    },
    price:{
        padding:scaleSize(10),
        fontFamily:"Blinker-Regular",
        fontSize:scaleSize(20),
        color:'#000'
    },
    ratingRow:{
        paddingBottom:scaleSize(15),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:70,
        top:scaleSize(10)
    },
    rating:{
        top:scaleSize(20),
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginHorizontal:scaleSize(15),
        color:'#000', 
        gap: scaleSize(10)
    },
    txt:{
        fontSize:scaleSize(16),
        fontFamily:'Blinker-Regular', 
        color:'#000'
    },
    verticleLine:{
        height: '60%',
        width: scaleSize(1),
        backgroundColor: '#D9D9D9',
        marginTop:scaleSize(10),
        marginLeft:scaleSize(-15) 
       },
    miniHead:{
        flexDirection:'row',
        gap:scaleSize(5)
       },
    descriptionWrapper:{
        marginTop:scaleSize(20),
        marginHorizontal:scaleSize(20)
       },
    descTxt:{
       fontFamily:'regular',
       fontSize:scaleSize(12)
       },
    sizesRow:{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: scaleSize(4),
        marginTop: scaleSize(6),
    },
    customSizes:{
        flex: 1,
        fontSize: scaleSize(12),
        fontFamily:'regular',
        color: '#000',
    },
    sizeTop:{
        marginTop:scaleSize(22),
        marginHorizontal: scaleSize(22)
    },
    sizeDirection:{
        flexDirection: "row", 
        alignItems: "center" 
    },
    horizontal:{
        marginTop:scaleSize(22),
        width:"100%",
        borderBottomColor: COLORS.lightgrey,
        borderBottomWidth:scaleSize( 1),
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
        marginHorizontal: scaleSize(12),
    },
    container: {
        flexDirection: 'column',
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000000',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 5,
      },
      text: {
        flex: 1,
        textAlign: 'center',
        color: '#000000',
      },
});

export default styles;