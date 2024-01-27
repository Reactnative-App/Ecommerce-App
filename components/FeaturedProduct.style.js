// FeaturedProduct.style.js
import { StyleSheet } from "react-native";

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
    fontFamily: "Blinker-Regular",
    color: activeProdType === item ? '#444262' : '#717171',
  }),
});

export default styles;
