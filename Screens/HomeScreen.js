import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
// import { StatusBar } from 'expo-status-bar'
// import Icons from 'react-native-vector-icons/Ionicons';
import CategoriesTypes from "../components/Categories";
import CategoryProducts from "../components/CategoryProducts";
import FeaturedProduct from "../components/FeaturedProduct";
// import ProductCartView from '../components/ProductCartView';
import ArrivalProducts from "../components/ArrivalProducts";
import Craousel from "../components/Craousel";
// import { ScrollView } from "react-native-virtualized-view";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./HomeScreen.style";
// import { TabView, SceneMap } from 'react-native-tab-view';
import TopTabNavigation from "../Navigation/TopTabNavigation";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      {/* <StatusBar style='dark'/> */}
      <ScrollView contentContainerStyle={styles.paddVert}>
        <SafeAreaView>
          <ImageBackground
            source={require("../assets/Home_bg.png")}
            style={{ height: "100%", width: "100%", position: "relative" }}
          >
            <View style={styles.appWrapper}>
              <View style={styles.appBar}>
                <Image source={require("../assets/overay_logo.png")} />
                <View style={styles.iconAlig}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("SearchBar")}
                  >
                    <Image source={require("../assets/Icons/searchIcon.png")} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require("../assets/Icons/notification_Icon.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <CategoriesTypes />
              <Craousel />
              <TopTabNavigation />
              <ArrivalProducts />

              <View style={{ marginTop: 20 }}>
                <Text style={styles.txt}>Featured Product</Text>
              </View>

              <FeaturedProduct />
              <CategoryProducts />

              <TouchableOpacity style={styles.btn}>
                <Text style={{ color: "#fff" }}>View All Categories</Text>
              </TouchableOpacity>

              <View style={styles.homeFooter}>
                <View style={styles.homeFooter}>
                  <Image
                    source={require("../assets/Icons/cash.png")}
                    style={{ height: 24, width: 24 }}
                  />
                  <Text style={{ fontSize: 7, marginLeft: 5 }}>
                    CASH ON DELIVERY
                  </Text>
                </View>
                <View style={styles.verticleLine}></View>

                <View style={styles.homeFooter}>
                  <Image
                    source={require("../assets/Icons/return.png")}
                    style={{ height: 24, width: 24 }}
                  />
                  <Text style={{ fontSize: 7, marginLeft: 5 }}>
                    15 DAYS EASY RETURNS
                  </Text>
                </View>
                <View style={styles.verticleLine}></View>

                <View style={styles.homeFooter}>
                  <Image
                    source={require("../assets/Icons/shipping.png")}
                    style={{ height: 24, width: 24 }}
                  />
                  <Text style={{ fontSize: 7, marginLeft: 5 }}>
                    EXPRESS SHIPPING
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
