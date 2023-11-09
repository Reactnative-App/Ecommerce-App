import {
  View,
  Text,
  FlatList,

} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { scaleFont, scaleSize } from "../Constants/Mixins";
import ARROW_SVG from "../assets/svg/Arrow.svg";
import { COLORS } from "../Constants/theme";
import DOTS_SVG from "../assets/svg/Dots.svg";

const REVIEW_DATA = [
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "2 hour ago",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "2 hour ago",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "2 hour ago",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "2 hour ago",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "2 hour ago",
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    time: "2 hour ago",
  },
];
const Notification = ({ navigation }) => {
  const ListHeaderItem = () => {
    return (
      <View style={{ marginTop: scaleSize(30) }}>
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
                Notification
              </Text>
            </View>
          </View>
          {/* <DOTS_SVG
            height={scaleSize(20)}
            width={scaleSize(20)}
            style={{ marginHorizontal: scaleSize(20) }}
          /> */}
        </View>
      </View>
    );
  };
  const renderReviewItem = ({ item }) => {
    return (
      <View
        style={{
          marginTop: scaleSize(15),
          marginHorizontal: scaleSize(20),
          padding: scaleSize(20),
          marginBottom: scaleSize(10),
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: 52,
              height: 52,
              borderRadius: 100 / 2,
              backgroundColor: COLORS.white,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "bold",
                fontSize: scaleFont(10),
                color: COLORS.txtGray,
              }}
            >
              GOOD
            </Text>
            <Text
              style={{
                fontFamily: "bold",
                fontSize: scaleFont(10),
                color: COLORS.txtGray,
              }}
            >
              NESS.
            </Text>
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 16 / 2,
                backgroundColor: COLORS.NotifyDot,
                position: "absolute",
                top: 5,
                right: 5,
              }}
            />
          </View>
          <View style={{ flex: 1, marginLeft: scaleSize(10) }}>
            <Text
              style={{
                color: "#0F0F0F",
                fontFamily: "regular",
                fontSize: scaleFont(10),
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                color: "#BDBDBD",
                fontFamily: "regular",
                fontSize: scaleFont(10),
                marginTop: scaleSize(10),
              }}
            >
              {item.time}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white_light }}>
      <StatusBar style="dark" backgroundColor={COLORS.white_light} />
      <FlatList
        data={REVIEW_DATA}
        renderItem={renderReviewItem}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        ListHeaderComponent={ListHeaderItem}
      />
    </SafeAreaView>
  );
};

export default Notification;
