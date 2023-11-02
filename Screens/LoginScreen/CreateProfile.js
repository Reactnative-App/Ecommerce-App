import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Icons from "react-native-vector-icons/Ionicons";
import MIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Image } from "react-native";
import { TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import ARROW_SVG from "../../assets/svg/Arrow.svg";
import { scaleFont, scaleSize } from "../../Constants/Mixins";
import { COLORS } from "../../Constants/theme";
const CreateProfile = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    //console.warn("A date has been picked: ", date);
    setSelectedDate(moment(date).format("YYYY-MM-DD").split("T")[0]);
    hideDatePicker();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#FFFCF3" style="dark" />
      <ScrollView
        // source={require("../../assets/Profilebg.png")}
        style={{ backgroundColor: "#FBF9EF", marginTop: scaleSize(20) }}
      >
        <ARROW_SVG
          size={scaleSize(20)}
          style={{ marginTop: scaleSize(30), marginLeft: scaleSize(30) }}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            marginLeft: scaleSize(30),
            marginTop: scaleSize(10),
            fontSize: scaleFont(20),
          }}
        >
          Setup Profile
        </Text>
        <View
          // source={require("../../assets/Profilebg.png")}
          style={{
            // backgroundColor: "#F4E8AE",
            // backgroundColor: "#FAF7EA",

            height: "60%",
            width: "60%",
            alignSelf: "center",
          }}
        >
          <View style={{ backgroundColor: "#FAF7EA" }}>
            <View
              style={{
                backgroundColor: "white",
                height: scaleSize(84),
                width: scaleSize(84),
                marginTop: scaleSize(20),
                borderRadius: scaleSize(80),
                alignSelf: "center",
                elevation: 8,
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#F3D743",
                  //use bordr radious to make background color
                  // backgroundColor: "#F0F0F0",

                  height: scaleSize(25),
                  width: scaleSize(25),
                  position: "absolute",
                  left: scaleSize(50),
                  borderRadius: scaleSize(40),
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => console.log("Camera")}
              >
                <Icons
                  name="camera"
                  size={scaleSize(14)}
                  color={COLORS.white}
                  // style={{ backgroundColor: "#FOFOFO" }}
                />
              </Pressable>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Image
                  source={require("../../assets/profile_pic.png")}
                  style={{ height: scaleSize(32), width: scaleSize(32) }}
                />
              </View>
            </View>
          </View>

          <Text
            style={{
              marginTop: scaleSize(20),
              textAlign: "center",
              fontSize: scaleFont(16),
            }}
          >
            Choose Your Image
          </Text>

          <View style={styles.input}>
            <Image
              source={require("../../assets/Icons/man.png")}
              style={{ marginTop: 15, marginLeft: 15, marginRight: 15 }}
            />
            <TextInput placeholder="Full Name" />
          </View>
          <View style={styles.input}>
            <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
              <Image
                source={require("../../assets/Icons/cal.png")}
                style={{ marginTop: 15, marginLeft: 15, marginRight: 15 }}
              />
            </TouchableOpacity>
            <TextInput placeholder="Date of Birth" value={selectedDate} />
          </View>
          <View style={styles.input}>
            <Image
              source={require("../../assets/Icons/loc.png")}
              style={{ marginTop: 15, marginLeft: 15, marginRight: 15 }}
            />
            <TextInput placeholder="Region" />
          </View>
          <View style={styles.input}>
            <Image
              source={require("../../assets/Icons/Gen.png")}
              style={{ marginTop: 15, marginLeft: 15, marginRight: 15 }}
            />
            <TextInput placeholder="Gender" />
            <Image
              source={require("../../assets/Icons/pen.png")}
              style={{ marginTop: 15, marginRight: 10, marginLeft: 200 }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <Pressable
              style={[
                styles.btn,
                { width: 90, marginRight: 20, backgroundColor: "#fff" },
              ]}
              onPress={() => {
                navigation.navigate("ForgotPass");
              }}
            >
              <Text style={{ color: "#000", textAlign: "center" }}>Skip</Text>
            </Pressable>
            <Pressable style={[styles.btn, { width: 180, marginLeft: 120 }]}>
              <Text style={{ color: "#000", textAlign: "center" }}>
                Go To Shopping
              </Text>
            </Pressable>
          </View>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({
  input: {
    marginTop: 30,
    alignSelf: "center",
    flexDirection: "row",
    // backgroundColor: "#e9edf2,#FEFCF6",
    backgroundColor: "white",
    height: 50,
    width: 325,
    borderRadius: 40,
    elevation: 4,
  },
  btn: {
    padding: 15,
    backgroundColor: "#F3D743",
    borderRadius: 20,
  },
});
