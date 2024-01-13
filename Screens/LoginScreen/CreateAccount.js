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
  SafeAreaView,StatusBar
} from 'react-native';
import React, {useState} from 'react';
// import {StatusBar} from 'expo-status-bar';
import Icons from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import CheckBox from 'expo-checkbox';
import HEADER_IMG from '../../assets/Header.png';
import ARROW_SVG from '../../assets/svg/Arrow.svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {WIDTH, scaleFont, scaleSize} from '../../Constants/Mixins';
import MAIL_SVG from '../../assets/svg/Mail.svg';
import LOCK_SVG from '../../assets/svg/Lock.svg';
import CALL_SVG from '../../assets/svg/Call.svg';
import {COLORS} from '../../Constants/theme';
const LoginScreen = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  const [showotp, setshowotp] = useState(true);
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
          Create Your Account
        </Text>

        <View style={styles.inputBoxStyle}>
          <View style={{alignSelf: 'center', margin: scaleSize(15)}}>
            <MAIL_SVG size={scaleSize(20)} />
          </View>
          <TextInput placeholder="Email Address" style={{flex: 1}} />
        </View>
        <View style={styles.inputBoxStyle}>
          <View style={{alignSelf: 'center', margin: scaleSize(15)}}>
            <CALL_SVG size={scaleSize(20)} />
          </View>
          <TextInput
            keyboardType="number-pad"
            placeholder="Phone Number"
            maxLength={10}
            style={{flex: 1}}
          />
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

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: scaleSize(30),
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          {/* <CheckBox
            style={styles.check}
            value={isSelected}
            onValueChange={setSelection}
            color={isSelected ? '#EED443' : ''}
          /> */}
          <Text
            style={{
              marginLeft: scaleSize(10),
              fontSize: scaleFont(18),
              fontFamily: 'regular',
            }}>
            I agree with{' '}
            <Text
              style={{
                color: '#EED443',
                fontSize: scaleFont(18),
                fontFamily: 'regular',
              }}>
              Terms of Service & Privacy Policy
            </Text>
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-around',
            marginTop: scaleSize(10),
          }}>
          <TouchableOpacity
            style={[
              styles.btn,
              {
                backgroundColor: '#fff',
                elevation: 10,
                shadowColor: '#F3D743',
                shadowOpacity: 0.25,
                shadowRadius: 5,
              },
            ]}
            onPress={() => navigation.navigate('CreateAccount')}>
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
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('CreateProfile')}>
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
  input: {
    height: 50,
    width: '70%',
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 10,
    shadowColor: '#F3D743',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  btn: {
    height: 40,
    backgroundColor: '#F3D743',
    width: 155,
    marginLeft: 30,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialBtn: {
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  check: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderColor: '#737171',
    borderWidth: 1,
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
