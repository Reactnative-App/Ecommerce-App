import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { scaleFont, scaleSize } from "../Constants/Mixins";
import ARROW_SVG from "../assets/svg/Arrow.svg";
import STAR_SVG from "../assets/svg/Star.svg";
import CHAT_SVG from "../assets/svg/Chat.svg";
import NAVI_ARRW_SVG from "../assets/svg/navigateArrw.svg";
import FILTER_SVG from "../assets/svg/Filter.svg";
import { COLORS } from "../Constants/theme";
import * as Progress from "react-native-progress";
import IMG_PROFILE from "../assets/onboard4.png";
import { AirbnbRating } from "react-native-ratings";
const REVIEW_DATA = [
  {
    name: "Nathan Cooper",
    time: "1hr",
    rate: "5",
    comment:
      "“They're awesome. If you're thinking about using anything from LA-Studio, just do it, you won't regret it. They're so good and make sure you're happy with your final product. Can't say enough great things about them!”",
    image: IMG_PROFILE,
  },
  {
    name: "Nathan Cooper",
    time: "1hr",
    rate: "4",
    comment:
      "“They're awesome. If you're thinking about using anything from LA-Studio, just do it, you won't regret it. They're so good and make sure you're happy with your final product. Can't say enough great things about them!”",
    image: IMG_PROFILE,
  },
  {
    name: "Nathan Cooper",
    time: "1hr",
    rate: "1",
    comment:
      "“They're awesome. If you're thinking about using anything from LA-Studio, just do it, you won't regret it. They're so good and make sure you're happy with your final product. Can't say enough great things about them!”",
    image: IMG_PROFILE,
  },
  {
    name: "Nathan Cooper",
    time: "1hr",
    rate: "5",
    comment:
      "“They're awesome. If you're thinking about using anything from LA-Studio, just do it, you won't regret it. They're so good and make sure you're happy with your final product. Can't say enough great things about them!”",
    image: IMG_PROFILE,
  },
  {
    name: "Nathan Cooper",
    time: "1hr",
    rate: "3",
    comment:
      "“They're awesome. If you're thinking about using anything from LA-Studio, just do it, you won't regret it. They're so good and make sure you're happy with your final product. Can't say enough great things about them!”",
    image: IMG_PROFILE,
  },
  {
    name: "Nathan Cooper",
    time: "1hr",
    rate: "5",
    comment:
      "“They're awesome. If you're thinking about using anything from LA-Studio, just do it, you won't regret it. They're so good and make sure you're happy with your final product. Can't say enough great things about them!”",
    image: IMG_PROFILE,
  },
  {
    name: "Nathan Cooper",
    time: "1hr",
    rate: "2",
    comment:
      "“They're awesome. If you're thinking about using anything from LA-Studio, just do it, you won't regret it. They're so good and make sure you're happy with your final product. Can't say enough great things about them!”",
    image: IMG_PROFILE,
  },
];
const Reviews = ({ navigation }) => {
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
                REVIEW
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: COLORS.white,
            marginHorizontal: scaleSize(20),
            padding: scaleSize(20),
            elevation: 1,
            marginTop: scaleSize(30),
            borderRadius: 10,
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: scaleSize(20),
            }}
          >
            <Text
              style={{
                color: COLORS.black_light,
                fontFamily: "regular",
                fontSize: scaleFont(60),
              }}
            >
              4.9
              <Text
                style={{
                  color: "#BDBDBD",
                  fontFamily: "regular",
                  fontSize: scaleFont(20),
                }}
              >
                /5
              </Text>
            </Text>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
              </View>
              <Text
                style={{
                  color: "#BDBDBD",
                  fontFamily: "regular",
                  fontSize: scaleFont(10),
                }}
              >
                Based On 10 Reviews
              </Text>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
              <Text
                style={{
                  color: "#717171",
                  fontFamily: "regular",
                  fontSize: scaleFont(14),
                }}
              >
                5
              </Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Progress.Bar
                progress={0.5}
                width={scaleSize(220)}
                unfilledColor="#F6F6F6"
                borderColor="#F6F6F6"
                color="#F3D743"
                // height={5}
              />
            </View>
            <Text>90%</Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
              <Text
                style={{
                  color: "#717171",
                  fontFamily: "regular",
                  fontSize: scaleFont(14),
                }}
              >
                4
              </Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Progress.Bar
                progress={0.2}
                width={scaleSize(220)}
                unfilledColor="#F6F6F6"
                borderColor="#F6F6F6"
                color="#F3D743"
                // height={5}
              />
            </View>
            <Text>10%</Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
              <Text
                style={{
                  color: "#717171",
                  fontFamily: "regular",
                  fontSize: scaleFont(14),
                }}
              >
                3
              </Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Progress.Bar
                progress={0.5}
                width={scaleSize(220)}
                unfilledColor="#F6F6F6"
                borderColor="#F6F6F6"
                color="#F3D743"
                // height={5}
              />
            </View>
            <Text>90%</Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
              <Text
                style={{
                  color: "#717171",
                  fontFamily: "regular",
                  fontSize: scaleFont(14),
                }}
              >
                2
              </Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Progress.Bar
                progress={0.5}
                width={scaleSize(220)}
                unfilledColor="#F6F6F6"
                borderColor="#F6F6F6"
                color="#F3D743"
                // height={5}
              />
            </View>
            <Text>90%</Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
              <Text
                style={{
                  color: "#717171",
                  fontFamily: "regular",
                  fontSize: scaleFont(14),
                }}
              >
                1
              </Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Progress.Bar
                progress={0.5}
                width={scaleSize(220)}
                unfilledColor="#F6F6F6"
                borderColor="#F6F6F6"
                color="#F3D743"
                // height={5}
              />
            </View>
            <Text>90%</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("AddReviews")}
          style={{
            backgroundColor: COLORS.white,
            marginHorizontal: scaleSize(20),
            padding: scaleSize(20),
            elevation: 1,
            marginTop: scaleSize(30),
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <CHAT_SVG height={scaleSize(18)} width={scaleSize(18)} />
          <View style={{ flex: 1, marginLeft: scaleSize(10) }}>
            <Text
              style={{
                color: "#717171",
                fontFamily: "regular",
                fontSize: scaleFont(15),
              }}
            >
              Add a review
            </Text>
          </View>
          <NAVI_ARRW_SVG height={scaleSize(16)} width={scaleSize(16)} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: scaleSize(25),
            marginVertical: scaleSize(25),
          }}
        >
          <Text
            style={{
              color: "#0F0F0F",
              fontFamily: "bold",
              fontSize: scaleFont(20),
              fontWeight: "600",
            }}
          >
            User Reviews
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FILTER_SVG
              height={scaleSize(14)}
              width={scaleSize(14)}
              style={{ marginRight: scaleSize(5) }}
            />
            <Text
              style={{
                color: "#0F0F0F",
                fontFamily: "regular",
                fontSize: scaleFont(15),
              }}
            >
              Sort By
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const renderReviewItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: COLORS.white,
          marginHorizontal: scaleSize(20),
          padding: scaleSize(20),
          elevation: 1,
          marginBottom: scaleSize(15),
          borderRadius: 10,
          // flexDirection: "row",
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
          <Image
            source={item.image}
            style={{
              height: scaleSize(36),
              width: scaleSize(36),
              borderRadius: scaleSize(20),
            }}
            resizeMode="cover"
          />
          <View style={{ flex: 1, marginLeft: scaleSize(10) }}>
            <Text
              style={{
                color: "#0F0F0F",
                fontFamily: "regular",
                fontSize: scaleFont(16),
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                color: "#BDBDBD",
                fontFamily: "regular",
                fontSize: scaleFont(10),
              }}
            >
              {item.time}
            </Text>
          </View>
          <AirbnbRating
            defaultRating={item.rate}
            count={5}
            showRating={false}
            size={scaleSize(10)}
            isDisabled={true}
          />
        </View>
        <Text
          style={{
            color: "#717171",
            fontFamily: "regular",
            fontSize: scaleFont(14),
            marginTop: scaleSize(10),
          }}
        >
          {item.comment}
        </Text>
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

export default Reviews;
