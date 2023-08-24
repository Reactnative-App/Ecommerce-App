import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Icons from "react-native-vector-icons/Ionicons";
import MIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Image } from "react-native";
import { TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

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
    <View style={{ marginTop: 70 }}>
      <StatusBar backgroundColor="#FFFCF3" style="dark" />
      <ImageBackground
        source={require("../../assets/Profilebg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Icons
          name="arrow-back-outline"
          size={24}
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        />
        <Text style={{ marginLeft: 30, marginTop: 10, fontSize: 20 }}>
          Setup Profile
        </Text>
        <ImageBackground
          source={require("../../assets/Profilebg.png")}
          style={{ height: "60%", width: "60%", alignSelf: "center" }}
        >
          <View
            style={{
              backgroundColor: "white",
              height: 84,
              width: 84,
              marginTop: 20,
              borderRadius: 84 / 2,
              alignSelf: "center",
            }}
          >
            <Pressable
              style={{
                backgroundColor: "#F3D743",
                height: 25,
                width: 25,
                position: "absolute",
                left: 50,
                borderRadius: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => console.log("Camera")}
            >
              <Icons name="camera" size={14} color="#fff" />
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
                style={{ height: 32, width: 32 }}
              />
            </View>
          </View>

          <Text style={{ marginTop: 20, textAlign: "center", fontSize: 16 }}>
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

          <View></View>

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
            <Pressable style={[styles.btn, { width: 150, marginLeft: 40 }]}>
              <Text style={{ color: "#000", textAlign: "center" }}>
                Go To Shopping
              </Text>
            </Pressable>
          </View>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default CreateProfile;

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
    padding: 15,
    backgroundColor: "#F3D743",
    borderRadius: 20,
  },
});
