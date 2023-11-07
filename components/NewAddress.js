import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../Constants/theme";
import { ScrollView } from "react-native";
import ARROW_SVG from "../assets/svg/Arrow.svg";
import { HEIGHT, WIDTH, scaleFont, scaleSize } from "../Constants/Mixins";
import EDIT_SVG from "../assets/svg/Edit.svg";
import CALL_SVG from "../assets/svg/Call.svg";
import PROFILE_SVG from "../assets/svg/Profile.svg";
import THREE_DOT_SVG from "../assets/svg/DotGrp.svg";
import LOCATION_SVG from "../assets/svg/Location.svg";
import MAIL_SVG from "../assets/svg/Mail.svg";
import { TextInput } from "react-native";
import MAP from "../assets/Map.png";
import { Image } from "react-native";
import { Switch } from "react-native";
import { TouchableOpacity } from "react-native";
export default function NewAddress({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar style="dark" backgroundColor={COLORS.white} />
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
                  fontFamily: "regular",
                  fontSize: scaleFont(15),
                }}
              >
                NEW ADDRESS
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: scaleSize(20),
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
            placeholder="Title"
            style={{ margin: 0, padding: 0, marginLeft: scaleSize(5), flex: 1 }}
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
          <LOCATION_SVG />
          <Text
            style={{
              color: "#0F0F0F",
              fontFamily: "bold",
              fontSize: scaleFont(15),
              flex: 1,
              marginLeft: scaleSize(5),
            }}
          >
            Set My Location
          </Text>
          <THREE_DOT_SVG />
        </View>

        <Image
          source={MAP}
          style={{
            height: HEIGHT / 4,
            width: WIDTH - scaleSize(50),
            alignSelf: "center",
            marginTop: scaleSize(20),
            borderRadius: 10,
          }}
          resizeMode="cover"
        />

        <View
          style={{
            marginTop: scaleSize(20),
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
            style={{ margin: 0, padding: 0, marginLeft: scaleSize(5), flex: 1 }}
          />
        </View>

        <View
          style={{
            marginTop: scaleSize(20),
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
          <LOCATION_SVG
            height={scaleSize(18)}
            width={scaleSize(18)}
            style={{ marginLeft: scaleSize(15) }}
          />
          <TextInput
            placeholder="Country/Region"
            style={{ margin: 0, padding: 0, marginLeft: scaleSize(5), flex: 1 }}
          />
        </View>

        <View
          style={{
            marginTop: scaleSize(20),
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
          <LOCATION_SVG
            height={scaleSize(18)}
            width={scaleSize(18)}
            style={{ marginLeft: scaleSize(15) }}
          />
          <TextInput
            placeholder="Street address"
            style={{ margin: 0, padding: 0, marginLeft: scaleSize(5), flex: 1 }}
          />
        </View>

        <View
          style={{
            marginTop: scaleSize(20),
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
          <LOCATION_SVG
            height={scaleSize(18)}
            width={scaleSize(18)}
            style={{ marginLeft: scaleSize(15) }}
          />
          <TextInput
            placeholder="Town/City"
            style={{ margin: 0, padding: 0, marginLeft: scaleSize(5), flex: 1 }}
          />
        </View>

        <View
          style={{
            marginTop: scaleSize(20),
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
          <CALL_SVG
            height={scaleSize(18)}
            width={scaleSize(18)}
            style={{ marginLeft: scaleSize(15) }}
          />
          <Text
            style={{
              color: "#717171",
              fontFamily: "regular",
              fontSize: scaleFont(15),
              marginLeft: scaleSize(10),
            }}
          >
            +1
          </Text>
          <View
            style={{
              height: "100%",
              width: 1,
              backgroundColor: "#BDBDBD",
              marginLeft: scaleSize(5),
            }}
          />
          <TextInput
            placeholder="Phone Number"
            style={{ margin: 0, padding: 0, marginLeft: scaleSize(5), flex: 1 }}
          />
        </View>

        <View
          style={{
            marginTop: scaleSize(20),
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
          <MAIL_SVG
            height={scaleSize(18)}
            width={scaleSize(18)}
            style={{ marginLeft: scaleSize(15) }}
          />
          <TextInput
            placeholder="Email address"
            style={{ margin: 0, padding: 0, marginLeft: scaleSize(5), flex: 1 }}
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
              fontFamily: "bold",
              fontSize: scaleFont(15),
              flex: 1,
              marginLeft: scaleSize(5),
            }}
          >
            Set Default Address
          </Text>
          <Switch />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("SetAddress")}
          style={{
            marginHorizontal: scaleSize(25),
            marginVertical: scaleSize(30),
            backgroundColor: "#F3D743",
            padding: scaleSize(15),
            alignItems: "center",
            borderRadius: scaleSize(30),
          }}
        >
          <Text
            style={{
              color: "#0F0F0F",
              fontFamily: "regular",
              fontSize: scaleFont(16),
            }}
          >
            Save Address
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
