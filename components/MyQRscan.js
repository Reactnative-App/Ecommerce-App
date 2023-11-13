import { View, Text, TextInput, Switch, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { COLORS } from "../Constants/theme";
import { StatusBar } from "expo-status-bar";
import { HEIGHT, WIDTH, scaleFont, scaleSize } from "../Constants/Mixins";
import ARROW_SVG from "../assets/svg/Arrow.svg";
import BACKGROUND_IMG from "../assets/Product_Bg.png";
import { ScrollView } from "react-native";
import { ImageBackground } from "react-native";
import QR_SVG from "../assets/svg/qr.svg";
import SCAN_SVG from "../assets/svg/Scan.svg";
import QR_IMG from "../assets/QR.png";
import SHARE_SVG from "../assets/svg/share.svg";
import CALENDER_SVG from "../assets/svg/Calendar.svg";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function MyQRscan(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar
        style="dark"
        // backgroundColor={COLORS.white_light}
        translucent
      />
      <ImageBackground
        source={BACKGROUND_IMG}
        style={{ height: HEIGHT, width: WIDTH }}
      >
        <ScrollView style={{ marginTop: scaleSize(30) }}>
          <View
            style={{
              flexDirection: "row",
              marginTop: scaleSize(30),
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ARROW_SVG
              height={scaleSize(20)}
              width={scaleSize(20)}
              style={{ marginLeft: scaleSize(20) }}
              onPress={() => navigation.goBack()}
            />
            <View
              style={{
                flex: 1,
                alignItems: "center",
                // marginRight: scaleSize(50),
              }}
            >
              <View
                style={{
                  backgroundColor: "#0F0F0F",
                  paddingHorizontal: scaleSize(20),
                  paddingVertical: scaleSize(5),
                  borderRadius: 15,
                }}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    fontFamily: "regular",
                    fontSize: scaleFont(15),
                  }}
                >
                  MY QR CODE
                </Text>
              </View>
            </View>
            <SHARE_SVG
              height={scaleSize(20)}
              width={scaleSize(20)}
              style={{ marginRight: scaleSize(20) }}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View
            style={{
              width: WIDTH - scaleSize(50),
              //   height: HEIGHT / 3,
              marginTop: scaleSize(30),
              alignSelf: "center",
              backgroundColor: "rgba(0, 0, 0, 0.06)",
              borderRadius: scaleSize(10),
              padding: scaleSize(20),
              alignItems: "center",
            }}
          >
            <Image
              source={QR_IMG}
              style={{ height: scaleSize(170), width: scaleSize(170) }}
              resizeMode="contain"
            />
            <Text
              style={{
                color: COLORS.txtGray,
                fontFamily: "regular",
                fontSize: scaleFont(14),
                marginTop: scaleSize(20),
              }}
            >
              Update Today, 9:41 am
            </Text>
            <View
              style={{
                width: WIDTH / 1.4,
                borderStyle: "dashed",
                borderColor: COLORS.lightgrey,
                borderWidth: 1,
                marginVertical: scaleSize(20),
              }}
            />
            <Text
              style={{
                color: COLORS.black,
                fontFamily: "regular",
                fontSize: scaleFont(20),
                marginTop: scaleSize(20),
              }}
            >
              You Have
            </Text>
            <Text
              style={{
                color: COLORS.yellow_shadow,
                fontFamily: "regular",
                fontSize: scaleFont(50),
                marginTop: scaleSize(10),
              }}
            >
              $ 9821.42
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: scaleSize(25),
              marginTop: scaleSize(20),
            }}
          >
            <TouchableOpacity
              style={{
                flex: 0.4,
                alignSelf: "center",
                backgroundColor: "rgba(0, 0, 0, 0.06)",
                borderRadius: scaleSize(10),
                padding: scaleSize(20),
                alignItems: "center",
              }}
            >
              <QR_SVG height={scaleSize(20)} width={scaleSize(20)} />
              <Text
                style={{
                  color: COLORS.black,
                  fontFamily: "regular",
                  fontSize: scaleFont(15),
                  marginTop: scaleSize(10),
                }}
              >
                My QR Code
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Scanner")}
              style={{
                flex: 0.4,
                alignSelf: "center",
                backgroundColor: "rgba(0, 0, 0, 0.06)",
                borderRadius: scaleSize(10),
                padding: scaleSize(20),
                alignItems: "center",
              }}
            >
              <SCAN_SVG height={scaleSize(20)} width={scaleSize(20)} />
              <Text
                style={{
                  color: COLORS.txtGray,
                  fontFamily: "regular",
                  fontSize: scaleFont(15),
                  marginTop: scaleSize(10),
                }}
              >
                Scan QR Code
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.white,
              elevation: 3,
              padding: scaleSize(15),
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: scaleSize(40),
              marginTop: scaleSize(80),
              marginBottom: scaleSize(20),
              marginHorizontal: scaleSize(25),
            }}
          >
            <Text
              style={{
                color: COLORS.txtGray,
                fontFamily: "regular",
                fontSize: scaleFont(15),
              }}
            >
              Choose another card
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
