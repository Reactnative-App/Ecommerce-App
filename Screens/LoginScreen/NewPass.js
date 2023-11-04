import {
  StyleSheet,
  TextInput,
  Pressable,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import Icons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { scaleFont, scaleSize } from "../../Constants/Mixins";
import ARROW_SVG from "../../assets/svg/Arrow.svg";

const NewPass = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <ScrollView>
        <ImageBackground
          source={require("../../assets/back.png")}
          style={{ height: "100%", width: "100%" }}
        >
          <ARROW_SVG
            size={scaleSize(20)}
            style={{ marginTop: scaleSize(50), marginLeft: scaleSize(20) }}
            onPress={() => navigation.goBack()}
          />
          <View style={{ marginTop: scaleSize(100) }}>
            <Text
              style={{
                marginLeft: scaleSize(20),
                fontSize: scaleFont(42),
                fontFamily: "regular",
              }}
            >
              Set New Password
            </Text>
            <Text
              style={{
                marginLeft: scaleSize(20),
                fontSize: scaleFont(14),
                fontWeight: "300",
                color: "gray",
                fontFamily: "regular",
              }}
            >
              Set a new password that must be different from the old password
            </Text>
          </View>

          <View style={styles.input}>
            <Icons
              name="lock-closed-outline"
              size={scaleSize(25)}
              color="gray"
              style={{
                marginRight: scaleSize(5),
                marginLeft: scaleSize(10),
                marginTop: scaleSize(8),
              }}
            />
            <TextInput placeholder="Password" style={{ flex: 1 }} />
            <Icons
              name="eye-outline"
              size={scaleSize(25)}
              color="gray"
              style={{ marginTop: scaleSize(10), marginRight: scaleSize(15) }}
            />
          </View>
          <View style={styles.input}>
            <Icons
              name="lock-closed-outline"
              size={scaleSize(25)}
              color="gray"
              style={{
                marginRight: scaleSize(5),
                marginLeft: scaleSize(10),
                marginTop: scaleSize(8),
              }}
            />
            <TextInput placeholder="Confirm Password" style={{ flex: 1 }} />
            <Icons
              name="eye-outline"
              size={scaleSize(25)}
              color="gray"
              style={{ marginTop: scaleSize(10), marginRight: scaleSize(15) }}
            />
          </View>

          <Pressable
            style={[styles.btn]}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text
              style={{
                color: "#000",
                textAlign: "center",
                fontSize: scaleFont(16),
                fontFamily: "regular",
              }}
            >
              Change Password
            </Text>
          </Pressable>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPass;

const styles = StyleSheet.create({
  input: {
    marginTop: 30,
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#e9edf2",
    height: 50,
    width: 325,
    borderRadius: 40,
    elevation: 4,
  },
  btn: {
    height: 40,
    width: 325,
    backgroundColor: "#F3D743",
    borderRadius: 40,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
