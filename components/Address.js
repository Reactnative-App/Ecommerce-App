import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
// import { StatusBar } from "expo-status-bar";
import {COLORS} from '../Constants/theme';
import {FlatList} from 'react-native';
import {scaleFont, scaleSize} from '../Constants/Mixins';
import ARROW_SVG from '../assets/svg/Arrow.svg';
import SEARCH_SVG from '../assets/svg/Search.svg';
import FILTER_SVG from '../assets/svg/Filter.svg';
import DELETE_SVG from '../assets/svg/Delete.svg';
import {ImageBackground} from 'react-native';
import {TextInput} from 'react-native';
import MAP from '../assets/Map.png';
const data = [
  {
    image: MAP,
    tutle: 'My Home',
    address: '4517 Washington Ave. Manchester, Kefw',
    phone: '354365474',
  },
  {
    image: MAP,
    tutle: 'My Office',
    address: '4517 Washington Ave. Manchester, Kefw',
    phone: '354365474',
  },
  {
    image: MAP,
    tutle: "Brother's home",
    address: '4517 Washington Ave. Manchester, Kefw',
    phone: '354365474',
  },
];
export default function Address({navigation}) {
  const ListHeaderItem = () => {
    return (
      <View style={{marginTop: scaleSize(30)}}>
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
                ADDRESS
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
           marginTop: scaleSize(20),
            marginHorizontal: scaleSize(25),
            borderRadius: scaleSize(30),
            elevation: 3,
            backgroundColor: COLORS.white,
           // paddingVertical: scaleSize(15),
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <SEARCH_SVG
            height={scaleSize(20)}
            width={scaleSize(20)}
            style={{marginHorizontal: scaleSize(10)}}
          />
           <TextInput
        placeholder="Find an address..."
        style={{ flex: 1, fontFamily: 'Blinker-Regular', color: 'gray' }}
        placeholderTextColor="gray"
      />
          <View
            style={{
              height: '60%',
              width: 1,
              backgroundColor: '#BDBDBD',
              marginLeft: scaleSize(5),
            }}
          />
          <FILTER_SVG
            height={scaleSize(20)}
            width={scaleSize(20)}
            style={{marginHorizontal: scaleSize(10)}}
          />
        </View>
      </View>
    );
  };
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          marginHorizontal: scaleSize(25),
          marginTop: scaleSize(30),
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: COLORS.white,
          padding: scaleSize(10),
          borderRadius: scaleSize(10),
        }}>
        <Image
          source={item.image}
          style={{
            height: scaleSize(85),
            width: scaleSize(75),
            borderColor: '#F3D743',
            borderWidth: 1,
            borderRadius: scaleSize(10),
          }}
        />
        <View style={{flex: 1, marginLeft: scaleSize(15)}}>
          <Text
            style={{
              color: '#F3D743',
              fontFamily: 'Blinker-Regular',
              fontSize: scaleFont(15),
            }}>
            {item.tutle}
          </Text>
          <Text
            style={{
              color: '#717171',
              fontFamily: 'Blinker-Regular',
              fontSize: scaleFont(11),
              marginTop: scaleSize(10),
            }}>
            {item.address}
          </Text>
          <Text
            style={{
              color: '#717171',
              fontFamily: 'Blinker-Regular',
              fontSize: scaleFont(11),
              marginTop: scaleSize(10),
            }}>
            {item.phone}
          </Text>
        </View>
        <View
          style={{
            //   alignItems: "center",
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'flex-end',
              borderWidth: 1,
              borderRadius: 30,
              borderColor: '#BDBDBD',
              padding: scaleSize(5),
            }}>
            <DELETE_SVG height={scaleSize(16)} width={scaleSize(16)} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white_light} /> */}
      <StatusBar
        barStyle={'dark-content'}
        // translucent
        backgroundColor={COLORS.white_light}
      />
      <ImageBackground
        source={require('../assets/Backg.png')}
        style={{height: '100%', width: '100%', position: 'relative'}}>
        <FlatList
          contentContainerStyle={{flex: 1}}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          ListHeaderComponent={ListHeaderItem}
          //   ListFooterComponent={ListFooterComponent}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('NewAddress')}
          style={{
            marginHorizontal: scaleSize(25),
            marginBottom: scaleSize(30),
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
            + Add New Address
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
