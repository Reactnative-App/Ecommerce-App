import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  ImageBackground,StatusBar
} from 'react-native';
import React, {useState} from 'react';
// import {StatusBar} from 'expo-status-bar';
import Icons from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native';
import HEADER_IMG from '../../assets/Header.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {WIDTH, scaleFont, scaleSize} from '../../Constants/Mixins';
import ARROW_SVG from '../../assets/svg/Arrow.svg';
import MAIL_SVG from '../../assets/svg/Mail.svg';
import LOCK_SVG from '../../assets/svg/Lock.svg';
import {COLORS} from '../../Constants/theme';
import {UserLoginAuth} from '../../config/Services';

const LoginScreen = ({navigation}) => {
  const [showotp, setshowotp] = useState(true);
  const loginData = async () => {
    const data = {
      phoneNo: '6393455368',
      password: 'qwerty',
      role: 'admin',
      email: 'yash2@gmail.com',
    };
    try {
      const response = await UserLoginAuth(data);
      console.log(response);
      // if (response.status == 200) {

      // }
    } catch (error) {
      console.log(error, 'adsnd');
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white_light}}>
      <ScrollView>
        <StatusBar backgroundColor="#F39184" barStyle={'dark-content'} />
        <ImageBackground
          source={HEADER_IMG}
          imageStyle={{
            borderBottomRightRadius: scaleSize(20),
            borderBottomLeftRadius: scaleSize(20),
          }}
          style={{
            height: hp('45%'),
            marginTop: scaleSize(10),
            width: wp('100%'),
          }}>
          <ARROW_SVG
            size={scaleSize(20)}
            style={{marginTop: scaleSize(30), marginLeft: scaleSize(30)}}
            onPress={() => navigation.goBack()}
          />
        </ImageBackground>

        <Text
          style={{
            fontSize: scaleFont(32),
            marginTop: scaleSize(20),
            fontWeight: '400',
            marginLeft: scaleSize(20),
          }}>
          Welcome Back
        </Text>

        <View style={styles.inputBoxStyle}>
          <View style={{alignSelf: 'center', margin: scaleSize(15)}}>
            <MAIL_SVG size={scaleSize(20)} />
          </View>
          <TextInput placeholder="Email Address" style={{flex: 1}} />
        </View>

        <View style={styles.inputBoxStyle}>
          <View style={{alignSelf: 'center', margin: scaleSize(15)}}>
            <LOCK_SVG size={scaleSize(20)} />
          </View>
          <TextInput
            placeholder=" Password"
            secureTextEntry={showotp}
            style={{flex: 1}}
          />
          <View style={{marginTop: scaleSize(10)}}>
            <Pressable
              onPress={() => {
                setshowotp(!showotp);
              }}>
              <View
                style={{
                  margin: scaleSize(5),
                  marginRight: scaleSize(15),
                }}>
                {showotp ? (
                  <Ionicons
                    name="ios-eye-off-outline"
                    size={scaleSize(20)}
                    color="#000"
                  />
                ) : (
                  <Ionicons
                    name="ios-eye-outline"
                    size={scaleSize(20)}
                    color="#000"
                  />
                )}
              </View>
            </Pressable>
          </View>
        </View>

        <Text
          style={{
            alignSelf: 'flex-end',
            marginTop: scaleSize(20),
            marginRight: scaleSize(20),
            fontWeight: '600',
            color: '#EED443',
            fontSize: scaleFont(20),
            fontFamily: 'regular',
          }}>
          Forgot Password
        </Text>

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: COLORS.white}]}
            onPress={() => navigation.navigate('CreateAccount')}
            // onPress={() => loginData()}
          >
            <Text
              style={{
                color: COLORS.black,
                textAlign: 'center',
                fontSize: scaleFont(18),
                fontFamily: 'regular',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={{
                color: COLORS.black,
                textAlign: 'center',
                fontSize: scaleFont(18),
                fontFamily: 'regular',
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
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
                width: scaleSize(100),
                textAlign: 'center',
                color: '#D9D9D9',
                fontSize: scaleFont(18),
                fontFamily: 'regular',
              }}>
              Or Sign In With
            </Text>
          </View>
          <View style={styles.right} />
        </View>

        <View style={{elevation: 1}}>
          <Pressable style={styles.socialBtn}>
            <Image
              source={require('../../assets/google.png')}
              style={{
                height: scaleSize(20),
                width: scaleSize(20),
                marginRight: scaleSize(20),
              }}
            />
            <Text
              style={{
                color: COLORS.black,
                textAlign: 'center',
                fontSize: scaleFont(18),
                fontFamily: 'regular',
              }}>
              Sign In With Google
            </Text>
          </Pressable>
        </View>

        <View style={{marginTop: scaleSize(15)}}>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#737171',
              textAlign: 'center',
            }}>
            By creating an account or logging in, you agree with Overay®
          </Text>

          <Text
            style={{
              fontSize: scaleFont(14),
              fontWeight: '600',
              color: '#737171',
              textAlign: 'center',
            }}>
            Terms & Conditions
            <Text style={{fontSize: scaleFont(12), alignSelf: 'center'}}>
              {' '}
              and
            </Text>
            <Text
              style={{
                fontSize: scaleFont(14),
                fontWeight: '600',
                alignSelf: 'center',
                color: '#737171',
              }}>
              {' '}
              Privacy Policy
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  btn: {
    height: scaleSize(40),
    backgroundColor: '#F3D743',
    width: scaleSize(155),
    marginLeft: scaleSize(30),
    marginTop: scaleSize(20),
    borderRadius: scaleSize(20),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#F3D743',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  socialBtn: {
    padding: scaleSize(15),
    backgroundColor: '#fff',
    marginTop: scaleSize(10),
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#F3D743',
    shadowOpacity: 0.25,
    shadowRadius: 5,
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
  inputBoxStyle: {
    flexDirection: 'row',
    marginTop: scaleSize(10),
    elevation: 10,
    shadowColor: '#F3D743',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    backgroundColor: COLORS.white,
    width: WIDTH - scaleSize(40),
    borderRadius: scaleSize(20),
    alignSelf: 'center',
  },
});
