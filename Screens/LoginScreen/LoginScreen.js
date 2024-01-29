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
  StatusBar,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {StatusBar} from 'expo-status-bar';
import Icons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useFonts} from 'expo-font';
import {SafeAreaView} from 'react-native';
import HEADER_IMG from '../../assets/Header.png';
import {WIDTH, scaleFont, scaleSize} from '../../Constants/Mixins';
import {COLORS} from '../../Constants/theme';
import EMAIL from '../../assets/Icons/Email.png';
import GOOGLE from '../../assets/google.png';
import FACEBOOK from '../../assets/facebook.png';
import PHONE from '../../assets/Icons/phone.png';
import ARROW_SVG from '../../assets/svg/Arrow.svg';
import auth from '@react-native-firebase/auth';
import PhoneInput from 'react-native-phone-number-input';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import {LoginManager, AccessToken} from 'react-native-fbsdk-next'; 
// import {regular} from '../../Constants/fonts';
// import { UserLoginAuth } from "../../config/Services";
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


const LoginScreen = (props) => {
  useEffect(()=>{
    GoogleSignin.configure({webClientId:'1071867006246-c74rko7ua5lqakf3atcqv72ug1khbpc7.apps.googleusercontent.com'});
  },[]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [usrInfo, setuserInfo] = useState(null);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const usrInfos = await GoogleSignin.signIn();
      
      setuserInfo(usrInfos);

      // console.log(usrInfo,"msg")
      
      props.navigation.navigate('CreateAccount',{mail:usrInfos.user.email})
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  const otpLogin=()=>{
    if(phoneNumber){
    navigation.navigate('VerifyCode',{phoneNumber:phoneNumber});}
    else{
      Alert.alert("Please enter number")
    }
  }

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
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  handlePhoneChange = (phoneNumber) => {
    this.setState({ phoneNumber });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: COLORS.white_light}}>
        <StatusBar
          barStyle={'dark-content'}
          translucent
          backgroundColor="transparent"
        />

        <ImageBackground
          source={HEADER_IMG}
          imageStyle={{
            borderBottomRightRadius: scaleSize(20),
            borderBottomLeftRadius: scaleSize(20),
          }}
          style={{
            height: hp('45%'),
            width: wp('100%'),
          }}>
          {/* <Icons
            name="arrow-back-outline"
            size={scaleSize(20)}
            style={{ marginTop: scaleSize(30), marginLeft: scaleSize(30) }}
            onPress={() => navigation.goBack()}
          /> */}
          {/* <ARROW_SVG
            size={scaleSize(20)}
            style={{marginTop: scaleSize(30), marginLeft: scaleSize(30)}}
            onPress={() => props.navigation.goBack()}
          /> */}
        </ImageBackground>

        <Text
          style={{
            fontSize: scaleFont(32),
            marginTop: scaleSize(20),
            fontWeight: '400',
            marginLeft: scaleSize(20),
            fontFamily: 'Blinker-Light',
            color: '#000',
          }}>
          Welcome Back
        </Text>
        <View style={{marginHorizontal: scaleSize(10), alignItems: 'center'}}>
        <View style={styles.input}>
      <Image
        source={PHONE}
        style={{
          marginTop: scaleSize(18),
          marginRight: scaleSize(10),
          marginLeft: scaleSize(15),
        }}
      />
      <Text
        style={{
          marginTop: scaleSize(15),
          marginRight: scaleSize(10),
          color: 'gray',
        }}>
        +91
      </Text>
      <View style={styles.verticleLine}></View>

      <TextInput
        style={{ flex: 1, fontFamily: 'Blinker-Regular', color: 'black' }}
        placeholderTextColor={'gray'}
        placeholder=" Phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        maxLength={10}
      />
    </View>

          <TouchableOpacity style={styles.btn}  onPress={() => {
               otpLogin()
              }}>
            <Text
              style={{
                color: '#000',
                textAlign: 'center',
                fontSize: scaleFont(14),
                fontFamily: 'Blinker-Regular',
                fontWeight: '400',
              }}>
              Continue With OTP
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: scaleSize(24),
            }}>
            <View style={styles.left} />
            <View>
              <Text
                style={{
                  fontSize: scaleFont(14),
                  textAlign: 'center',
                  fontFamily: 'Blinker-Regular',
                  color: '#717171',
                }}>
                Or Sign In With
              </Text>
            </View>
            <View style={styles.right} />
          </View>

          <View style={{elevation: 1}}>
            <Pressable
              style={styles.socialBtn}
              onPress={() => {
                props.navigation.navigate('LoginWithEmail');
              }}>
              <Image
                source={EMAIL}
                style={{ 
                  height: scaleSize(14),
                  width: scaleSize(14),
                  marginTop: scaleSize(6),
                  position: 'absolute',
                  left: "25%"
                }}
              />
              {/* <Icons name="mail-outline" size={20} style={{marginRight:20}} /> */}
              <Text
                style={{
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: 'Blinker-Regular',
                }}>
                Continue With Email
              </Text>
            </Pressable>
            <Pressable
              style={styles.socialBtn}
              onPress={() => {
                signIn();
              }}>
                {usrInfo !=null && <Text style={{color:'#000'}}>{usrInfo.user.name}</Text>}
            {usrInfo !=null && <Text style={{color:'#000'}}>{usrInfo.user.email}</Text>}
            {/* <Text style={{color:'#000'}}>Hello</Text> */}
              <Image
                source={GOOGLE}
                style={{
                  height: scaleSize(14),
                  width: scaleSize(14),
                  marginTop: scaleSize(6),
                  position: 'absolute',
                  left: "25%"
                }}
              />
              <Text
                style={{
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: 'Blinker-Regular',
                }}>
                Sign In With Google
              </Text>
            </Pressable>
            {/* <Pressable
  style={styles.socialBtn}
  onPress={() => onFacebookButtonPress()}>
  <Image
    source={FACEBOOK}
    style={{
      height: scaleSize(14),
      width: scaleSize(14),
      marginTop: scaleSize(6),
      position: 'absolute',
      // left: "25%"
    }}
  />
  <Text
    style={{
      color: '#000',
      textAlign: 'center',
      fontFamily: 'Blinker-Regular',
    }}>
    Sign In With Facebook
  </Text>
</Pressable> */}
<Pressable
              style={styles.socialBtn}
              onPress={() => {
                signIn();
              }}>
              <Image
                source={FACEBOOK}
                style={{
                  height: scaleSize(14),
                  width: scaleSize(14),
                  marginTop: scaleSize(6),
                  position: 'absolute',
                  left: "25%"
                }}
              />
              <Text
                style={{
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: 'Blinker-Regular',
                }}>
                Sign In With Facebook
              </Text>
            </Pressable>

          </View>

          <View style={{alignSelf: 'center', marginTop: 15}}>
            <Text
              style={{
                fontSize: scaleFont(12),
                color: 'gray',
                fontFamily: 'Blinker-Regular',
              }}>
              By creating an account or logging in, you agree With Overay®
            </Text>
            <View style={{flexDirection: 'row', marginLeft: 60}}>
              <Text
                style={{
                  fontSize: scaleFont(12),
                  fontWeight: '600',
                  color: '#737171',
                }}>
                Terms & Conditions
              </Text>
              <Text
                style={{
                  fontSize: scaleFont(12),
                  textAlign: 'center',
                  color: 'gray',
                }}>
                {' '}
                and
              </Text>
              <Text
                style={{
                  fontSize: scaleFont(12),
                  fontWeight: '600',
                  textAlign: 'center',
                  color: '#737171',
                }}>
                {' '}
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
    alignSelf: 'center',
    flexDirection: 'row',
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
    height: '60%',
    width: 1,
    backgroundColor: '#D9D9D9',
    marginTop: scaleSize(10),
    // marginLeft: -15,
  },
  btn: {
    height: scaleSize(40),
    backgroundColor: '#F3D743',
    width: WIDTH - scaleSize(35),
    // marginLeft: 30,
    marginTop: scaleSize(20),
    borderRadius: scaleSize(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialBtn: {
    height: scaleSize(40),
    backgroundColor: '#fff',
    width: WIDTH - scaleSize(45),
    // marginLeft: 30,
    marginTop: scaleSize(20),
    borderRadius: scaleSize(20),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: scaleSize(20),
    elevation: 10,
    shadowColor: '#F3D743',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    fontSize: scaleFont(14),
    
  },
  left: {
    marginLeft: scaleSize(50),
    flex: 1,
    height: 1,
    backgroundColor: '#D9D9D9',
  },
  right: {
    marginRight: scaleSize(50),
    flex: 1,
    height: 1,
    backgroundColor: '#D9D9D9',
  },
  phoneInput: {
    marginLeft: scaleSize(10),
    color: '#000',
  },
});
