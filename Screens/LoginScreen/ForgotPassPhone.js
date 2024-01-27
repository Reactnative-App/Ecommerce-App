import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
// import { StatusBar } from "expo-status-bar";
import Icons from 'react-native-vector-icons/Ionicons';
import {ImageBackground} from 'react-native';
import {Pressable} from 'react-native';
import {HEIGHT, WIDTH, scaleFont, scaleSize} from '../../Constants/Mixins';
import ARROW_SVG from '../../assets/svg/Arrow.svg';
import {COLORS} from '../../Constants/theme';
import PHONE from '../../assets/Icons/phone.png';
import PhoneInput from 'react-native-phone-number-input';
const ForgotPassPhone = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, marginTop: scaleSize(20)}}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView>
        <ImageBackground
          source={require('../../assets/back.png')}
          style={{height: '100%', width: '100%'}}>
          <ARROW_SVG
            size={scaleSize(20)}
            style={{marginTop: scaleSize(30), marginLeft: scaleSize(20)}}
            onPress={() => navigation.goBack()}
          />
          <ImageBackground
            source={require('../../assets/ForgotPass.png')}
            style={{
              height: HEIGHT / 2.05,
              width: WIDTH - scaleSize(40),
              alignSelf: 'center',
            }}
            resizeMode="contain">
            <Text
              style={{
                textAlign: 'center',
                marginTop: scaleSize(20),
                fontWeight: '800',
                fontSize: scaleFont(50),
                color: COLORS.white,
              }}>
              OVERAY
            </Text>
          </ImageBackground>

          <Text
            style={{
              marginTop: scaleSize(20),
              marginLeft: scaleSize(20),
              fontSize: scaleFont(32),
              fontFamily: 'Blinker-Light',
              fontWeight: '300',
              color:'#000'
            }}>
            Password Recovery
          </Text>
          <Text
            style={{
              marginTop: scaleSize(10),
              marginLeft: scaleSize(20),
              fontSize: scaleFont(14),
              color: 'gray',
               fontFamily: 'Blinker-Regular',
            }}>
            Enter Your Phone Number to Recover Password
          </Text>

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
       // value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        maxLength={10}
      />
    </View>
          <Text
            style={{
              marginTop: scaleSize(20),
              marginLeft: scaleSize(20),
              fontSize: scaleFont(20),
              fontSize: scaleFont(14),
              fontWeight: '600',
              color: '#F3D743',
            }}>
            Use Another Method
          </Text>

          <Pressable
            style={styles.btn}
            onPress={() => navigation.navigate('VerifyCode')}>
            <Text
              style={{
                fontSize: scaleFont(14),
                textAlign: 'center',
                fontFamily: 'Blinker-Regular',
                color:'#000'
              }}>
              Next
            </Text>
          </Pressable>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassPhone;

const styles = StyleSheet.create({
  input: {
    marginTop: scaleSize(30),
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: scaleSize(50),
    width: 325,
    borderRadius: 40,
    elevation: 4,
  },
  btn: {
    height: scaleSize(40),
    width: WIDTH - scaleSize(30),
    backgroundColor: '#F3D743',
    borderRadius: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scaleSize(30),
  },
  verticleLine: {
    height: '60%',
    width: 1,
    backgroundColor: '#D9D9D9',
    marginTop: scaleSize(10),
    // marginLeft: -15,
  },
});
