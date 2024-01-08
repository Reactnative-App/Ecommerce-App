import { StyleSheet } from "react-native";
import { WIDTH, scaleFont, scaleSize } from "../Constants/Mixins";
import { COLORS, SIZES } from "../Constants/theme";

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fffdf6'
    },
    arrw:{
        paddingTop:scaleSize(60),
        paddingHorizontal: scaleSize(16),
    },
    centerTxt: {
        fontSize: scaleFont(12),
        fontFamily: 'regular',
        paddingVertical: scaleSize(8),
        paddingHorizontal: scaleSize(16),
        borderRadius: scaleSize(16),
        backgroundColor: '#000',
        color: COLORS.white
    },
    descHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    descWrapper:{
        marginTop:scaleSize(20),
        marginHorizontal:scaleSize(22),
    },
    description:{
        fontFamily:'regular',
        fontSize:scaleFont(14)
    },
    descTxt:{
        marginTop:scaleSize(20),
        fontFamily:'regular',
        fontSize:scaleFont(10)
    },
    horizontal:{
        marginTop:scaleSize(22),
        marginHorizontal:scaleSize(22),
        borderBottomColor: COLORS.lightgrey,
        borderBottomWidth: 0.5,
    },
    listTxt:{
        fontSize:scaleFont(10),
        fontFamily:'regular',
        color:COLORS.txtGray
    },
    material:{
        fontFamily:'regular',
        fontSize:scaleFont(14),
    }
});

export default styles;