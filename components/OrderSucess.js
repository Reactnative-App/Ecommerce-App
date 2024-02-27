import { View, Text, TextInput, Switch, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { COLORS } from "../Constants/theme";
// import { StatusBar } from "expo-status-bar";
import { HEIGHT, WIDTH, scaleFont, scaleSize } from "../Constants/Mixins";
import ARROW_SVG from "../assets/svg/Arrow.svg";
import BACKGROUND_IMG from "../assets/Product_Bg.png";
import { ScrollView } from "react-native";
import { ImageBackground } from "react-native";
import QR_SVG from "../assets/svg/qr.svg";
import SUCESS_SVG from "../assets/svg/sucess.svg";
import QR_IMG from "../assets/QR.png";
import SHARE_SVG from "../assets/svg/share.svg";
import CALENDER_SVG from "../assets/svg/Calendar.svg";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";

export default function OrderSucess() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar
        barStyle={'dark-content'}
        // backgroundColor={COLORS.white_light}
        translucent
      />
      <ImageBackground
        source={BACKGROUND_IMG}
        style={{ height: HEIGHT, width: WIDTH }}
      >
        <ScrollView
          style={{ marginTop: scaleSize(30) }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: scaleSize(30),
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            
            <View
              style={{
                flex: 1,
                alignItems: "center",
                marginRight: scaleSize(50),
              }}
            >
              
            </View>
          </View>
          <View style={{ alignSelf: "center" }}>
            <SUCESS_SVG height={scaleSize(230)} width={scaleSize(230)} />
          </View>
          <Text
            style={{
              color: COLORS.black,
              fontFamily: "Blinker-Regular",
              fontSize: scaleFont(24),
              textAlign: "center",
              //   marginTop: scaleSize(20),
            }}
          >
            Thanks For Your Order
          </Text>
          <Text
            style={{
              color: COLORS.txtGray,
              fontFamily: "Blinker-Regular",
              fontSize: scaleFont(12),
              textAlign: "center",
              marginHorizontal: scaleSize(25),
              marginTop: scaleSize(20),
            }}
          >
            You’ll receive an email at Nathan.roberts@example.com once your
            order is confirm
          </Text>
          <View style={{ flex: 1 }}>
            <View
              style={{
                backgroundColor: COLORS.white,
                borderRadius: scaleSize(10),
                elevation: 3,
                paddingVertical: scaleSize(20),
                paddingHorizontal: scaleSize(10),
                marginHorizontal: scaleSize(25),
                marginTop: scaleSize(20),
              }}
            >
              <Text style={{color:'#000', fontSize: scaleFont(12)}}>Order Detail</Text>
              <View
                style={{
                  flex: 1,
                  height: 1,
                  marginHorizontal: scaleSize(10),
                  backgroundColor: "#E4E4E4",
                  marginTop: scaleSize(20),
                }}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: scaleSize(20),
                }}
              >
                <Text style={{color:'gray', fontSize: scaleFont(12)}}>Order Number:</Text>
                <Text style={{color:'#000', fontSize: scaleFont(12)}}>#1234567</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: scaleSize(10),
                }}
              >
                <Text style={{color:'gray', fontSize: scaleFont(12)}}>Amount Paid:</Text>
                <Text style={{color:'#F3D743', fontSize: scaleFont(12)}} >$123.00</Text>
              </View>
            </View>






            
            <TouchableOpacity
              onPress={() => navigation.navigate("SetAddress")}
              style={{
                marginHorizontal: scaleSize(25),
                marginTop: scaleSize(100),
                backgroundColor: "#F3D743",
                padding: scaleSize(15),
                alignItems: "center",
                borderRadius: scaleSize(30),
                alignContent: "flex-end",
              }}
            >
              <Text
                style={{
                  color: "#0F0F0F",
                  fontFamily: "Blinker-Regular",
                  fontSize: scaleFont(12),
                }}
              >
                Continue Shopping
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
