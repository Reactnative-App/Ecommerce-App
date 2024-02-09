import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
// import {StatusBar,} from 'expo-status-bar';
import {COLORS} from '../Constants/theme';
import {ImageBackground} from 'react-native';
import {ScrollView} from 'react-native';
import ARROW_SVG from '../assets/svg/Arrow.svg';
import {HEIGHT, WIDTH, scaleFont, scaleSize} from '../Constants/Mixins';
import MAP from '../assets/Map.png';
import LOCATION_SVG from '../assets/svg/Location.svg';
export default function SetAddress({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar
        barStyle={'dark-content'}
        // backgroundColor={COLORS.white_light}
        translucent
      />
      <ImageBackground
        source={require('../assets/Backg.png')}
        style={{height: '100%', width: '100%', position: 'relative'}}>
        <ScrollView style={{marginTop: scaleSize(30)}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: scaleSize(30),
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <ARROW_SVG
              height={scaleSize(20)}
              width={scaleSize(20)}
              style={{marginLeft: scaleSize(20)}}
              onPress={() => navigation.goBack()}
            />
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                marginRight: scaleSize(50),
              }}>
              <View
                style={{
                  backgroundColor: '#0F0F0F',
                  paddingHorizontal: scaleSize(20),
                  paddingVertical: scaleSize(5),
                  borderRadius: 15,
                }}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontFamily: 'Blinker-Regular',
                    fontSize: scaleFont(12),
                  }}>
                  SET LOCATION
                </Text>
              </View>
            </View>
          </View>
          <Image
            source={MAP}
            style={{
              height: HEIGHT / 2,
              width: WIDTH - scaleSize(50),
              alignSelf: 'center',
              marginTop: scaleSize(20),
              borderRadius: 10,
            }}
            resizeMode="cover"
          />

          <Text
            style={{
              color: '#0F0F0F',
              fontFamily: 'Blinker-SemiBold',
              fontSize: scaleFont(14),
              flex: 1,
              marginHorizontal: scaleSize(25),
              marginVertical: scaleSize(20),
            }}>
            Choose a place on the map
          </Text>

          <View
            style={{
              marginTop: scaleSize(10),
              marginHorizontal: scaleSize(25),
              borderRadius: scaleSize(30),
              elevation: 3,
              backgroundColor: COLORS.white,
              paddingVertical: scaleSize(10),
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <LOCATION_SVG
              height={scaleSize(18)}
              width={scaleSize(18)}
              style={{marginLeft: scaleSize(15)}}
            />
            <TextInput
              placeholder="Enter the address"
              style={{
                margin: 0,
                padding: 0,
                marginLeft: scaleSize(5),
                flex: 1,
                fontFamily: 'Blinker-Regular',
                fontSize: scaleFont(14),

              }}
              placeholderTextColor='gray'
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('PaymentMethod')}
            style={{
              marginHorizontal: scaleSize(25),
              marginTop: scaleSize(50),
              backgroundColor: '#F3D743',
              padding: scaleSize(15),
              alignItems: 'center',
              borderRadius: scaleSize(30),
            }}>
            <Text
              style={{
                color: '#0F0F0F',
                fontFamily: 'Blinker-Regular',
                fontSize: scaleFont(14),
              }}>
            
              Confirm Location
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
