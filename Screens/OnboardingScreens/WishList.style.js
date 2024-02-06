import { StyleSheet } from "react-native";
import { scaleSize, scaleFont } from "../../Constants/Mixins";

// import { COLORS, SIZES } from "../Constants/theme";

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fffdf6'
    },
    centerTxt: {
        fontSize: 12,
        fontFamily: 'Blinker-Regular',
        paddingVertical: 16 / 2,
        paddingHorizontal: 16,
        borderRadius: 16,
        backgroundColor: '#000',
        color: '#ffffff'
    },
    ListHeader: {
        width: '100%',
        flexDirection: 'row',
        paddingTop:60,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
        padding: 12
    },
    image: {
        width: 70,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignContent: 'center'
    },
    prodImg: {
        width: '100%',
        height: 65,
        borderRadius: 10,
        resizeMode: 'cover'
    },
    textContainer: {
        flex: 1,
        marginHorizontal: 12
    },
    prodTitle: {
        fontFamily: "regular",
        fontSize: 10,
        color: '#83829A'
    },
    supplier: {color:'#000',
        fontFamily: "Blinker-Regular",
        fontSize: 12,
    },
    price: {color:'#000',
        fontFamily: "Blinker-SemiBold",
        fontSize: 12,
    },
    sdHeading: {
    marginHorizontal: scaleSize(20) ,
    fontSize: scaleFont(24),
    fontFamily: 'Blinker-Regular'
  }
});

export default styles;