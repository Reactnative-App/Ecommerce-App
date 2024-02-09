import { View, Text, TextInput, Switch, StatusBar } from "react-native";
import React, {useState} from "react";
import { SafeAreaView } from "react-native";
import { COLORS } from "../Constants/theme";
// import { StatusBar } from "expo-status-bar";
import { HEIGHT, WIDTH, scaleFont, scaleSize } from "../Constants/Mixins";
import ARROW_SVG from "../assets/svg/Arrow.svg";
import DEBIT_CARD from "../assets/debitcard.png";
import { ScrollView } from "react-native";
import { ImageBackground } from "react-native";
import APPLE_SVG from "../assets/svg/apple.svg";
import PROFILE_SVG from "../assets/svg/Profile.svg";
import WALLET_SVG from "../assets/svg/Wallet_gray.svg";
import EDIT_SVG from "../assets/svg/Edit.svg";
import CALENDER_SVG from "../assets/svg/Calendar.svg";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
export default function AddNewCard({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar barStyle={'dark-content'} translucent/>
      <ScrollView style={{ marginTop: scaleSize(30), flex: 1 }}>
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
              marginRight: scaleSize(50),
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
                  fontFamily: "Blinker-Regular",
                  fontSize: scaleFont(12),
                }}
              >
                ADD NEW CARD
              </Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={DEBIT_CARD}
          style={{
            height: HEIGHT / 4.5,
            width: WIDTH - scaleSize(50),
            alignSelf: "center",
            marginTop: scaleSize(20),
            borderRadius: scaleSize(10),
            overflow: "hidden",
            padding: scaleSize(20),
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <APPLE_SVG />
            <Text
              style={{
                color: COLORS.black,
                fontFamily: "Blinker-Regular",
                fontSize: scaleFont(16),
              }}
            >
              **** **** **** 6173
            </Text>
          </View>
          <Text
            style={{
              color: COLORS.black,
              fontFamily: "Blinker-Regular",

              fontSize: scaleFont(10),
              marginTop: scaleSize(30),
            }}
          >
            Balance
          </Text>
          <Text
            style={{
              color: COLORS.black,
              fontFamily: "Blinker-Regular",
              fontSize: scaleFont(24),  
              fontSize: scaleFont(18),
              // marginTop: scaleSize(20),
            }}
          >
            $ 9821.42
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: scaleSize(40),
            }}
          >
            <Text
              style={{
                color: COLORS.black,
                fontFamily: "Blinker-Regular",
                fontSize: scaleFont(12),
              }}
            >
              Change Name
            </Text>
            <Text
              style={{
                color: COLORS.black,
                fontFamily: "Blinker-Regular",
                fontSize: scaleFont(12),
              }}
            >
              08/30
            </Text>
          </View>
        </ImageBackground>
        <View style={{ marginTop: scaleSize(20) }}></View>
        <View
          style={{
            marginTop: scaleSize(10),
            marginHorizontal: scaleSize(25),
            borderRadius: scaleSize(30),
            elevation: 3,
            backgroundColor: COLORS.white,
            paddingVertical: scaleSize(10),
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <PROFILE_SVG
            height={scaleSize(18)}
            width={scaleSize(18)}
            style={{ marginLeft: scaleSize(15) }}
          />
          <TextInput
            placeholder="Full name"
            style={{
              margin: 0,
              padding: 0,
              marginLeft: scaleSize(5),
              flex: 1,
              fontFamily: "Blinker-Regular",
                fontSize: scaleFont(14),
            }}
            placeholderTextColor={'gray'}

          />
        </View>

        <View
          style={{
            marginTop: scaleSize(10),
            marginHorizontal: scaleSize(25),
            borderRadius: scaleSize(30),
            elevation: 3,
            backgroundColor: COLORS.white,
            paddingVertical: scaleSize(10),
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <WALLET_SVG
            height={scaleSize(18)}
            width={scaleSize(18)}
            style={{ marginLeft: scaleSize(15) }}
          />
          <TextInput
            placeholder="Card Number"
            style={{
              margin: 0,
              padding: 0,
              marginLeft: scaleSize(5),
              flex: 1,
              fontFamily: "Blinker-Regular",
                fontSize: scaleFont(14),
            }}
            placeholderTextColor={'gray'}

          />
        </View>
        <View
          style={{
            marginTop: scaleSize(10),
            marginHorizontal: scaleSize(25),
            borderRadius: scaleSize(30),
            elevation: 3,
            backgroundColor: COLORS.white,
            paddingVertical: scaleSize(10),
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <EDIT_SVG
            height={scaleSize(18)}
            width={scaleSize(18)}
            style={{ marginLeft: scaleSize(15) }}
          />
          <TextInput
            placeholder="CVV"
            style={{
              margin: 0,
              padding: 0,
              marginLeft: scaleSize(5),
              flex: 1,
              fontFamily: "Blinker-Regular",
                fontSize: scaleFont(14),
            }}
            placeholderTextColor={'gray'}

          />
        </View>
        <View
          style={{
            marginTop: scaleSize(10),
            marginHorizontal: scaleSize(25),
            borderRadius: scaleSize(30),
            elevation: 3,
            backgroundColor: COLORS.white,
            paddingVertical: scaleSize(10),
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <CALENDER_SVG
            height={scaleSize(18)}
            width={scaleSize(18)}
            style={{ marginLeft: scaleSize(15) }}
          />
          <TextInput
            placeholder="Exp Date"
            style={{
              margin: 0,
              padding: 0,
              marginLeft: scaleSize(5),
              flex: 1,
              fontFamily: "Blinker-Regular",
                fontSize: scaleFont(14),
            }}
            placeholderTextColor={'gray'}

          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: scaleSize(25),
            marginTop: scaleSize(20),
          }}
        >
          <Text
            style={{
              color: "#0F0F0F",
              fontFamily: "Blinker-Regular",
                fontSize: scaleFont(12),
              flex: 1,
              marginLeft: scaleSize(5),
            }}
          >
            Set Default Address
          </Text>
          <Switch
        trackColor={{false: '#F3D743', true: '#F3D743'}}
        thumbColor={isEnabled ? '#fff' : '#fff'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: scaleSize(90),
            marginBottom: scaleSize(10),
            marginHorizontal: scaleSize(25),
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.white,
              elevation: 3,
              padding: scaleSize(15),
              width: "30%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: scaleSize(40),
            }}
          >
            <Text
              style={{
                color: 'gray',
                fontFamily: "Blinker-Regular",
                fontSize: scaleFont(14),
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.yellow_shadow,
              elevation: 3,
              padding: scaleSize(20),
              width: "60%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: scaleSize(40),
            }}
            onPress={() => navigation.navigate("MyQRscan")}
          >
            <Text
              style={{
                color: "#0F0F0F",
                fontFamily: "Blinker-Regular",
                fontSize: scaleFont(14),
              }}
            >
              Add Card
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: scaleSize(30),
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#fffef9",
    justifyContent: "center",
    alignItems: "center",
    height: scaleSize(68),
    width: scaleSize(68),
    borderRadius: 40,
    elevation: 4,
  },
  itext: {
    fontSize: scaleFont(26),
    fontWeight: "300",
  },
  btn: {
    padding: scaleSize(15),
    backgroundColor: "#F3D743",
    borderRadius: 20,
  },
});
