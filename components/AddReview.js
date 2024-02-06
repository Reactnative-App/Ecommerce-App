import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import ARROW_SVG from "../assets/svg/Arrow.svg";
import { scaleFont, scaleSize, WIDTH } from "../Constants/Mixins";
import { COLORS } from "../Constants/theme";
import { SafeAreaView } from "react-native";
import STAR_SVG from "../assets/svg/Star.svg";
import EDIT_SVG from "../assets/svg/Edit.svg";
import CHAT_SVG from "../assets/svg/Chat.svg";

const AddReview = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white_light }}>
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
                  color:'#000',
                  fontFamily: "Blinker-Regular",
                  fontSize: scaleFont(12),
                }}
              >
                ADD A REVIEW
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{ marginTop: scaleSize(70), marginHorizontal: scaleSize(20) }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../assets/Icons/wishlistImg.png")}
            style={{
              height: scaleSize(62),
              width: scaleSize(62),
              borderRadius: scaleSize(10),
            }}
            resizeMode="cover"
          />
          <View style={{ flex: 1, marginLeft: scaleSize(10) }}>
            <Text
              style={{
                color: "#BDBDBD",
                fontFamily: "regular",
                fontSize: scaleFont(10),
              }}
            >
              Fashion
            </Text>
            <Text
              style={{
                color: "#0F0F0F",
                fontFamily: "regular",
                fontSize: scaleFont(16),
              }}
            >
              T-shirt cotton Printed
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: scaleSize(30),
          marginHorizontal: scaleSize(20),
          borderBottomColor: COLORS.lightgrey,
          borderBottomWidth: 0.5,
        }}
      ></View>

      <View
        style={{
          marginTop: scaleSize(20),
          marginHorizontal: scaleSize(20),
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "regular",
            fontSize: scaleFont(10),
            color: COLORS.txtGray,
          }}
        >
          Your rating for this product
        </Text>
      </View>
      <View
        style={{
          marginTop: scaleSize(10),
          marginHorizontal: scaleSize(20),
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <STAR_SVG height={scaleSize(34)} width={scaleSize(34)} />
        <STAR_SVG height={scaleSize(34)} width={scaleSize(34)} />
        <STAR_SVG height={scaleSize(34)} width={scaleSize(34)} />
        <STAR_SVG height={scaleSize(34)} width={scaleSize(34)} />
        <STAR_SVG height={scaleSize(34)} width={scaleSize(34)} />
      </View>

      <View
        style={{
          marginTop: scaleSize(30),
          marginHorizontal: scaleSize(20),
          borderBottomColor: COLORS.lightgrey,
          borderBottomWidth: 0.5,
        }}
      ></View>

      <View
        style={{ marginTop: scaleSize(10), marginHorizontal: scaleSize(20) }}
      >
        <Text style={{ fontFamily: "regular", fontSize: scaleFont(40) }}>
          Add a Review
        </Text>
      </View>

      <View
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
        <EDIT_SVG height={scaleSize(18)} width={scaleSize(18)} />
        <View style={{ flex: 1, marginLeft: scaleSize(7) }}>
          <Text
            style={{
              color: "#717171",
              fontFamily: "regular",
              fontSize: scaleFont(15),
            }}
          >
            Title
          </Text>
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
          flexDirection: "row",
          alignItems: "flex-start",
          height: 144,
        }}
      >
        <CHAT_SVG height={scaleSize(18)} width={scaleSize(18)} />
        <View style={{ flex: 1, marginLeft: scaleSize(7) }}>
          <Text
            style={{
              color: "#717171",
              fontFamily: "regular",
              fontSize: scaleFont(15),
            }}
          >
            Message
          </Text>
        </View>
      </View>

      <View
        style={{ marginTop: scaleSize(20), marginHorizontal: scaleSize(20) }}
      >
        <Text
          style={{
            fontFamily: "regular",
            fontSize: scaleFont(10),
            color: COLORS.txtGray,
          }}
        >
          2000 character left
        </Text>
      </View>

      <Pressable
        style={{
          height: scaleSize(40),
          width: WIDTH - scaleSize(30),
          backgroundColor: "#F3D743",
          borderRadius: 40,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          marginTop: scaleSize(50),
        }}
      >
        <Text
          style={{
            fontSize: scaleFont(14),
            textAlign: "center",
            fontFamily: "regular",
          }}
        >
          Submit Review
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default AddReview;
