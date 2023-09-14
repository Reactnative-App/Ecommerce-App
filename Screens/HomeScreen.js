import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
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
import { ScrollView } from "react-native-virtualized-view";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./HomeScreen.style";
// import { TabView, SceneMap } from 'react-native-tab-view';

const HomeScreen = () => {
  return (
    <>
      {/* <StatusBar style='dark'/> */}
      <ScrollView>
        <SafeAreaView>
          <ImageBackground
            source={require("../assets/Home_bg.png")}
            style={{ height: "100%", width: "100%", position: "relative" }}
          >
            <View style={styles.appWrapper}>
              <View style={styles.appBar}>
                <Image source={require("../assets/overay_logo.png")} />
                <View style={styles.iconAlig}>
                  <TouchableOpacity>
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

              {/* <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:20}}>
        <TouchableOpacity style={styles.tbtn}>
            <Text>New Arrival</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tbtn}>
            <Text>Best Seller</Text>
        </TouchableOpacity>
       </View>
       <View style={{height:4,width:120, backgroundColor:"orange", marginTop:4,marginStart:"3%", alignSelf:"flex-start"}}/> */}
              <ArrivalProducts />

              <View style={{ marginTop: 20 }}>
                <Text style={styles.txt}>Featured Product</Text>
              </View>

              <FeaturedProduct />

              <CategoryProducts />
              {/* <ProductCartView/> */}
              <TouchableOpacity style={styles.btn}>
                <Text style={{ color: "#fff" }}>View All Categories</Text>
              </TouchableOpacity>

              {/* <View>
        <Image source={require('../assets/Home_Banner.png')} style={{height:300, width:300, alignSelf:"center"}} resizeMode='contain'/>
       </View> */}

              <View style={styles.homeFooter}>
                <View>
                  <Text>CASH ON DELIVERY</Text>
                </View>
                <View style={styles.verticalLine} />
                <View>
                  <Text>15 DAYS EASY RETURNS</Text>
                </View>
                <View style={styles.verticalLine} />
                <View>
                  <Text>EXPRESS SHIPPING</Text>
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

