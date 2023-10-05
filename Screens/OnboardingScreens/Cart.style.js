import { StyleSheet } from "react-native";

// import { COLORS, SIZES } from "../Constants/theme";

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fffdf6",
  },
  centerTxt: {
    fontSize: 12,
    fontFamily: "regular",
    paddingVertical: 16 / 2,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "#000",
    color: "#ffffff",
  },
  cartHeader: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 60,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  likeTxt: {
    fontSize: 20,
    fontFamily: "regular",
    paddingVertical: 16 / 2,
    paddingHorizontal: 16,
  },
});

export default styles;
