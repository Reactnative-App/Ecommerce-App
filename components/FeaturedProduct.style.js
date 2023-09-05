import { StyleSheet } from "react-native";

// import { COLORS, SIZES } from "../Constants/theme";

const styles = StyleSheet.create({
    tabsContainer: {
        width: "100%",
        marginTop: 16,
    },
    tab: (activeJobType, item) => ({
        paddingVertical: 16 / 2,
        paddingHorizontal: 16,
        borderRadius: 16,
        backgroundColor: activeJobType === item ? '#F3D743' : '#FFFFFF',
    }),
    tabText: (activeJobType, item) => ({
        fontFamily: "regular",
        color: activeJobType === item ? '#444262' : '#717171',
    }),
});

export default styles;