import { StyleSheet } from "react-native";

// import { COLORS, SIZES } from "../Constants/theme";

const styles = StyleSheet.create({
    tabsContainer: {
        width: "100%",
        marginTop: 20,
    },
    tab: (activeProdType, item) => ({
        paddingVertical: 16 / 2,
        paddingHorizontal: 16,
        borderRadius: 16,
        backgroundColor: activeProdType === item ? '#F3D743' : '#FFFFFF',
    }),
    tabText: (activeProdType, item) => ({
        fontFamily: "regular",
        color: activeProdType === item ? '#444262' : '#717171',
    }),
});

export default styles;