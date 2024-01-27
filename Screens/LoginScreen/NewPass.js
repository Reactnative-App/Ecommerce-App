import {
  StyleSheet,
  TextInput,
  Pressable,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,StatusBar
} from 'react-native';
import React from 'react';
import  {useState} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {StatusBar} from 'expo-status-bar';
import {scaleFont, scaleSize} from '../../Constants/Mixins';
import ARROW_SVG from '../../assets/svg/Arrow.svg';
import LOCK_SVG from '../../assets/svg/Lock.svg';
import {COLORS} from '../../Constants/theme';
import {WIDTH} from '../../Constants/Mixins';
const NewPass = ({navigation}) => {
  const [showotp, setshowotp] = useState(true);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView>
        <ImageBackground
          source={require('../../assets/back.png')}
          style={{height: '100%', width: '100%'}}>
          <ARROW_SVG
            size={scaleSize(20)}
            style={{marginTop: scaleSize(50), marginLeft: scaleSize(20)}}
            onPress={() => navigation.goBack()}
          />
          <View style={{marginTop: scaleSize(100)}}>
            <Text
              style={{
                marginLeft: scaleSize(20),
                fontSize: scaleFont(42),
                fontFamily: 'Blinker-Light',
                color:'#000'
              }}>
              Set New Password
            </Text>
            <Text
              style={{
                marginLeft: scaleSize(20),
                fontSize: scaleFont(12),
                fontWeight: '300',
                color: 'gray',
                fontFamily: 'Blinker-Regular',
              }}>
              Set a new password that must be different from the old password
            </Text>
          </View>

          <View style={styles.inputBoxStyle}>
      <View style={{ alignSelf: 'center', margin: scaleSize(15) }}>
        {/* Assuming LOCK_SVG is your custom component */}
        <LOCK_SVG size={scaleSize(20)} />
      </View>

      <TextInput
        placeholder="Password"
        style={{ flex: 1, fontFamily: 'Blinker-Regular', color: 'gray' }}
        placeholderTextColor="gray"
        secureTextEntry={showotp}
      />

      <View style={{ marginTop: scaleSize(10) }}>
        <Pressable
          onPress={() => {
            setshowotp(!showotp);
          }}
        >
          <View
            style={{
              margin: scaleSize(5),
              marginRight: scaleSize(15),
            }}
          >
            {showotp ? (
              <Ionicons
                name="eye-off"
                size={scaleSize(20)}
                color="#000"
              />
            ) : (
              <Ionicons
                name="eye"
                size={scaleSize(20)}
                color="#000"
              />
            )}
          </View>
        </Pressable>
      </View>
    </View>
          
    <View style={styles.inputBoxStyle}>
      <View style={{ alignSelf: 'center', margin: scaleSize(15) }}>
        {/* Assuming LOCK_SVG is your custom component */}
        <LOCK_SVG size={scaleSize(20)} />
      </View>

      <TextInput
        placeholder="Confirm Password"
        style={{ flex: 1, fontFamily: 'Blinker-Regular', color: 'gray' }}
        placeholderTextColor="gray"
        secureTextEntry={showotp}
      />

      <View style={{ marginTop: scaleSize(10) }}>
        <Pressable
          onPress={() => {
            setshowotp(!showotp);
          }}
        >
          <View
            style={{
              margin: scaleSize(5),
              marginRight: scaleSize(15),
            }}
          >
            {showotp ? (
              <Ionicons
                name="eye-off"
                size={scaleSize(20)}
                color="#000"
              />
            ) : (
              <Ionicons
                name="eye"
                size={scaleSize(20)}
                color="#000"
              />
            )}
          </View>
        </Pressable>
      </View>
    </View>

          <Pressable
            style={[styles.btn]}
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text
              style={{
                color: '#000',
                textAlign: 'center',
                fontSize: scaleFont(14),
                fontFamily: 'Blinker-Regular',
              }}>
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
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#e9edf2',
    height: 50,
    width: 325,
    borderRadius: 40,
    elevation: 4,
  },
  btn: {
    height: 40,
    width: 325,
    backgroundColor: '#F3D743',
    borderRadius: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  inputBoxStyle: {
    flexDirection: 'row',
    marginTop: scaleSize(20),
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
