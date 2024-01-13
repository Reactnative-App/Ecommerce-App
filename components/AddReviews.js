import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import React from "react";
// import { StatusBar } from "expo-status-bar";
import { COLORS } from "../Constants/theme";
import { scaleFont, scaleSize } from "../Constants/Mixins";
import ARROW_SVG from "../assets/svg/Arrow.svg";
import EDIT_SVG from "../assets/svg/Edit.svg";
import IMG_PROFILE from "../assets/onboard4.png";
import { Rating } from "react-native-ratings";
import CHAT_SVG from "../assets/svg/Chat.svg";
export default function AddReviews({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white_light }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white_light} />
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
                ADD A REVIEW
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: scaleSize(25),
            marginTop: scaleSize(30),
          }}
        >
          <Image
            source={IMG_PROFILE}
            style={{ height: scaleSize(55), width: scaleSize(55) }}
          />
          <View
            style={{
              marginLeft: scaleSize(10),
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Text
              style={{
                color: "#717171",
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
              T-shirt cotton printed
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#E4E4E4",
            height: 1,
            marginHorizontal: scaleSize(25),
            marginTop: scaleSize(30),
          }}
        />

        <View
          style={{ marginHorizontal: scaleSize(25), marginTop: scaleSize(30) }}
        >
          <Text
            style={{
              color: "#717171",
              fontFamily: "regular",
              fontSize: scaleFont(12),
              textAlign: "center",
            }}
          >
            Your rating for this product
          </Text>
          <Rating
            style={{
              justifyContent: "space-between",
              alignSelf: "center",
              marginTop: scaleSize(20),
            }}
            ratingColor="#F3D743"
            startingValue={0}
            ratingBackgroundColor={COLORS.white}
            ratingCount={5}
            imageSize={40}
            // onFinishRating={rating => RatingCompleted(rating)}
          />
        </View>

        <View
          style={{
            backgroundColor: "#E4E4E4",
            height: 1,
            marginHorizontal: scaleSize(25),
            marginTop: scaleSize(30),
          }}
        />
        <View
          style={{ marginHorizontal: scaleSize(25), marginTop: scaleSize(30) }}
        >
          <Text
            style={{
              color: "#0F0F0F",
              fontFamily: "regular",
              fontSize: scaleFont(25),
            }}
          >
            Add A Review
          </Text>
        </View>

        <View
          style={{
            backgroundColor: COLORS.white,
            marginHorizontal: scaleSize(25),
            padding: scaleSize(10),
            elevation: 1,
            marginTop: scaleSize(30),
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <EDIT_SVG height={scaleSize(18)} width={scaleSize(18)} />
          <TextInput
            placeholder="Title"
            style={{ margin: 0, padding: 0, marginLeft: scaleSize(5), flex: 1 }}
          />
        </View>

        <View
          style={{
            backgroundColor: COLORS.white,
            marginHorizontal: scaleSize(25),
            padding: scaleSize(10),
            elevation: 1,
            marginTop: scaleSize(30),
            borderRadius: 10,
            flexDirection: "row",
            // alignItems: "center",
            height: scaleSize(150),
          }}
        >
          <CHAT_SVG
            height={scaleSize(18)}
            width={scaleSize(18)}
            style={{ marginTop: scaleSize(5) }}
          />
          <TextInput
            placeholder="Message"
            multiline
            style={{
              margin: 0,
              padding: 0,
              marginLeft: scaleSize(5),
              flex: 1,
              alignSelf: "flex-start",
            }}
          />
        </View>
        <View style={{ marginHorizontal: scaleSize(25) }}>
          <Text
            style={{
              color: "#717171",
              fontFamily: "regular",
              fontSize: scaleFont(12),
              marginTop: scaleSize(5),
            }}
          >
            2000 character left
          </Text>
        </View>

        <TouchableOpacity
          style={{
            marginHorizontal: scaleSize(25),
            marginTop: scaleSize(40),
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
            Submit Review
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
