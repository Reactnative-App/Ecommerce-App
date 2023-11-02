import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Icons from "react-native-vector-icons/Ionicons";
import QuickFood from "../components/QuickFood";
import CategoryProducts from "../components/CategoryProducts";
import FeaturedProduct from "../components/FeaturedProduct";
import { ScrollView } from "react-native";
import { scaleSize } from "../Constants/Mixins";
import { ImageBackground } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <ScrollView>
        <ImageBackground source={require("../assets/Product_Bg.png")}>
          <View
            style={{
              marginTop: 50,
              marginLeft: 10,
              paddingBottom: scaleSize(80),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginEnd: 10,
              }}
            >
              <Image
                source={require("../assets/main_logo.png")}
                style={{ height: 36, width: 36, marginLeft: 10 }}
              />
              <View style={{ flexDirection: "row", margin: 10 }}>
                <Icons name="search" size={18} />
                <Icons
                  name="notifications-outline"
                  size={18}
                  style={{ marginLeft: 10 }}
                />
              </View>
            </View>

            <QuickFood />

            <View>
              <Image
                source={require("../assets/Hero_Banner.png")}
                style={{ height: 270, width: 325, alignSelf: "center" }}
                resizeMode="contain"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 10,
              }}
            >
              <TouchableOpacity style={styles.tbtn}>
                <Text>New Arrival</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tbtn}>
                <Text>Best Seller</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 16 }}>
              <Text style={styles.txt}>Featured Product</Text>
            </View>

            <FeaturedProduct />

            <CategoryProducts />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  tbtn: {
    backgroundColor: "#e9edf2",
    padding: 10,
    width: 100,
    borderRadius: 50,
  },
  txt: {
    fontSize: 24,
    fontFamily: "regular",
  },
});
