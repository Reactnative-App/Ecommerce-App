import { StyleSheet, TextInput, Pressable, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Icons from "react-native-vector-icons/Ionicons";
import { ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { HEIGHT, WIDTH, scaleFont, scaleSize } from "../../Constants/Mixins";
import ARROW_SVG from "../../assets/svg/Arrow.svg";
import { COLORS } from "../../Constants/theme";

const VerificationCode = ({ navigation }) => {
  let e1 = useRef();
  let e2 = useRef();
  let e3 = useRef();
  let e4 = useRef();
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [t3, setT3] = useState("");
  const [t4, setT4] = useState("");
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(59);

  useEffect(() => {
    setTimeout(() => {
      setSec(sec - 1);
    }, 1000);
  }, [sec]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <ImageBackground
        source={require("../../assets/verifyBg.png")}
        style={{ height: "100%", width: "100%" }}
      >
        <ARROW_SVG
          size={scaleSize(20)}
          style={{ marginTop: scaleSize(50), marginLeft: scaleSize(20) }}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontWeight: "300",
            fontSize: scaleFont(40),
            marginLeft: scaleSize(20),
            fontFamily: "regular",
          }}
        >
          Verification Code
        </Text>
        <View style={{ marginTop: scaleSize(20), marginLeft: scaleSize(20) }}>
          <Text
            style={{
              fontSize: scaleFont(16),
              color: "gray",
              fontFamily: "regular",
            }}
          >
            We have sent the code Verification to your number
          </Text>
          <Text
            style={{
              fontSize: scaleFont(16),
              color: "#2d2c2c",
              fontFamily: "regular",
            }}
          >
            (700)749-0538
          </Text>
        </View>
        <Text
          style={{
            marginTop: scaleSize(10),
            marginLeft: scaleSize(10),
            fontSize: scaleFont(17),
            fontWeight: "600",
            color: "#F3D743",
            fontFamily: "regular",
          }}
        >
          Change Phone Number
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <View style={styles.input}>
            <TextInput
              ref={e1}
              style={styles.itext}
              keyboardType="number-pad"
              maxLength={1}
              value={t1}
              onChangeText={(txt) => {
                setT1(txt);
                if (txt.length >= 1) {
                  e2.current.focus();
                }
              }}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              ref={e2}
              style={styles.itext}
              keyboardType="number-pad"
              maxLength={1}
              value={t2}
              onChangeText={(txt) => {
                setT2(txt);
                if (txt.length >= 1) {
                  e3.current.focus();
                } else if (txt.length < 1) {
                  e1.current.focus();
                }
              }}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              ref={e3}
              style={styles.itext}
              keyboardType="number-pad"
              maxLength={1}
              value={t3}
              onChangeText={(txt) => {
                setT3(txt);
                if (txt.length >= 1) {
                  e4.current.focus();
                } else if (txt.length < 1) {
                  e2.current.focus();
                }
              }}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              ref={e4}
              style={styles.itext}
              keyboardType="number-pad"
              maxLength={1}
              value={t4}
              onChangeText={(txt) => {
                setT4(txt);
                if (txt.length >= 1) {
                  e4.current.focus();
                } else if (txt.length < 1) {
                  e3.current.focus();
                }
              }}
            />
          </View>
        </View>

        <Text
          style={{
            textAlign: "center",
            marginTop: scaleSize(20),
            fontSize: scaleFont(16),
            fontFamily: "regular",
          }}
        >
          0{min}:{sec}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: scaleSize(30),
          }}
        >
          <Pressable
            style={[
              styles.btn,
              {
                marginRight: scaleSize(20),
                backgroundColor: "#fff",
                width: scaleSize(100),
              },
            ]}
            onPress={() => {}}
          >
            <Text
              style={{
                color: "#000",
                fontSize: scaleSize(14),
                textAlign: "center",
                fontFamily: "regular",
              }}
            >
              Resend
            </Text>
          </Pressable>
          <Pressable
            style={[styles.btn, { width: scaleSize(150) }]}
            onPress={() => navigation.navigate("NewPass")}
          >
            <Text
              style={{
                color: "#000",
                textAlign: "center",
                fontSize: scaleFont(14),
                fontFamily: "regular",
              }}
            >
              Confirm
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default VerificationCode;

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
