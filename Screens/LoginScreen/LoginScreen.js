import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Icons from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native";
import HEADER_IMG from "../../assets/Header.png";
import { WIDTH, scaleFont, scaleSize } from "../../Constants/Mixins";
import { COLORS } from "../../Constants/theme";
import EMAIL from "../../assets/Icons/Email.png";
import GOOGLE from "../../assets/google.png";
import FACEBOOK from "../../assets/facebook.png";
import PHONE from "../../assets/Icons/phone.png";
import ARROW_SVG from "../../assets/svg/Arrow.svg";
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
// import { UserLoginAuth } from "../../config/Services";
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


const LoginScreen = ({ navigation }) => {
  const [usrInfo,setuserInfo]=useState(null)
  // useEffect(()=>{
  //   GoogleSignin.configure({webClientId:'87099456490-t87r3pq1qijkbaeaa07ihbov8e9du3kg.apps.googleusercontent.com'});
  // }, []);
  // const signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const usrInfo = await GoogleSignin.signIn();
  //     setuserInfo({ usrInfo });
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };
  const loginData = async () => {
    try {
      const response = await UserLoginAuth();
      if (response.status == 200) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: COLORS.white_light }}>
        <StatusBar backgroundColor={COLORS.pink} style="light" />

        <ImageBackground
          source={HEADER_IMG}
          imageStyle={{
            borderBottomRightRadius: scaleSize(20),
            borderBottomLeftRadius: scaleSize(20),
          }}
          style={{
            height: hp("45%"),
            marginTop: scaleSize(10),
            width: wp("100%"),
            // alignSelf: "center",
          }}
        >
          {/* <Icons
            name="arrow-back-outline"
            size={scaleSize(20)}
            style={{ marginTop: scaleSize(30), marginLeft: scaleSize(30) }}
            onPress={() => navigation.goBack()}
          /> */}
          <ARROW_SVG
            size={scaleSize(20)}
            style={{ marginTop: scaleSize(30), marginLeft: scaleSize(30) }}
            onPress={() => navigation.goBack()}
          />
        </ImageBackground>

        <Text
          style={{
            fontSize: scaleFont(32),
            marginTop: scaleSize(20),
            fontWeight: "400",
            marginLeft: scaleSize(20),
            fontFamily: "regular",
          }}
        >
          Welcome Back
        </Text>
        <View style={{ marginHorizontal: scaleSize(10), alignItems: "center" }}>
          <View style={styles.input}>
            <Image
              source={PHONE}
              style={{
                marginTop: scaleSize(18),
                marginRight: scaleSize(10),
                marginLeft: scaleSize(15),
              }}
            />
            {/* <Icons name="call-outline" size={25} color="gray" style={{marginRight:10, marginLeft:10,marginTop:10}}/> */}
            <Text
              style={{
                marginTop: scaleSize(15),
                marginRight: scaleSize(10),
                color: "gray",
              }}
            >
              +91
            </Text>
            <View style={styles.verticleLine}></View>
            <TextInput
              placeholder="Phone Number"
              style={{ marginLeft: scaleSize(10) }}
              maxLength={10}
            />
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text
              style={{
                color: "#000",
                textAlign: "center",
                fontSize: scaleFont(14),
                fontFamily: "regular",
                fontWeight: "400",
              }}
            >
              Continue With OTP
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: scaleSize(24),
            }}
          >
            <View style={styles.left} />
            <View>
              <Text
                style={{
                  fontSize: scaleFont(14),
                  textAlign: "center",
                  color: "#717171",
                }}
              >
                Or Sign In With
              </Text>
            </View>
            <View style={styles.right} />
          </View>

          <View style={{ elevation: 1 }}>
            <Pressable
              style={styles.socialBtn}
              onPress={() => {
                navigation.navigate("LoginWithEmail");
              }}
            >
              <Image
                source={EMAIL}
                style={{
                  marginTop: scaleSize(6),
                  marginRight: scaleSize(10),
                  marginLeft: scaleSize(10),
                }}
              />
              {/* <Icons name="mail-outline" size={20} style={{marginRight:20}} /> */}
              <Text style={{ textAlign: "center" }}>Continue With Email</Text>
            </Pressable>
            <Pressable style={styles.socialBtn} onPress={()=>{signIn()}}>
              <Image
                source={GOOGLE}
                style={{
                  height: scaleSize(18),
                  width: scaleSize(18),
                  marginRight: scaleSize(15),
                }}
              />
              <Text>Sign In With Google</Text>
            </Pressable>
            <Pressable style={styles.socialBtn} onPress={() => onFacebookButtonPress()}>
              <Image
                source={FACEBOOK}
                style={{
                  height: scaleSize(18),
                  width: scaleSize(18),
                  marginRight: scaleSize(15),
                }}
              />
              <Text>Sign In With Facebook</Text>
            </Pressable>
          </View>

          <View style={{ alignSelf: "center", marginTop: 4 }}>
            <Text style={{ fontSize: scaleFont(12) }}>
              By creating an account or logging in, you agree With Overay®
            </Text>
            <View style={{ flexDirection: "row", marginLeft: 60 }}>
              <Text
                style={{
                  fontSize: scaleFont(12),
                  fontWeight: "600",
                  color: "#737171",
                }}
              >
                Terms & Conditions
              </Text>
              <Text style={{ fontSize: scaleFont(12), textAlign: "center" }}>
                {" "}
                and
              </Text>
              <Text
                style={{
                  fontSize: scaleFont(12),
                  fontWeight: "600",
                  textAlign: "center",
                  color: "#737171",
                }}
              >
                {" "}
                Privacy Policy
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    marginTop: scaleSize(10),
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: COLORS.white,
    height: scaleSize(50),
    width: WIDTH - scaleSize(35),
    borderRadius: scaleSize(40),
    elevation: 10,
    shadowColor: COLORS.yellow_shadow,
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  verticleLine: {
    height: "60%",
    width: 1,
    backgroundColor: "#D9D9D9",
    marginTop: scaleSize(10),
    // marginLeft: -15,
  },
  btn: {
    height: scaleSize(40),
    backgroundColor: "#F3D743",
    width: WIDTH - scaleSize(35),
    // marginLeft: 30,
    marginTop: scaleSize(20),
    borderRadius: scaleSize(20),
    justifyContent: "center",
    alignItems: "center",
  },
  socialBtn: {
    height: scaleSize(40),
    backgroundColor: "#fff",
    width: WIDTH - scaleSize(35),
    // marginLeft: 30,
    marginTop: scaleSize(20),
    borderRadius: scaleSize(20),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: scaleSize(20),
    elevation: 10,
    shadowColor: "#F3D743",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    fontSize: scaleFont(14),
  },
  left: {
    marginLeft: scaleSize(50),
    flex: 1,
    height: 1,
    backgroundColor: "#D9D9D9",
  },
  right: {
    marginRight: scaleSize(50),
    flex: 1,
    height: 1,
    backgroundColor: "#D9D9D9",
  },
});
