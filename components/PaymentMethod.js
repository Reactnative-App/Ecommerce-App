import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
// import {StatusBar} from 'expo-status-bar';
import {COLORS} from '../Constants/theme';
import ARROW_SVG from '../assets/svg/Arrow.svg';
import MASTERCARD_SVG from '../assets/svg/mastercard.svg';
import VISA_SVG from '../assets/svg/visa.svg';
import PAYPAL_SVG from '../assets/svg/paypal.svg';
import APPLE_SVG from '../assets/svg/apple.svg';
import WALLET_SVG from '../assets/svg/Wallet.svg';
import {HEIGHT, WIDTH, scaleFont, scaleSize} from '../Constants/Mixins';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
const DATA_ITEM = [
  {
    title: 'Master card',
    icon: <MASTERCARD_SVG height={scaleSize(20)} width={scaleSize(20)} />,
  },
  {
    title: 'PayPal',
    icon: <PAYPAL_SVG height={scaleSize(20)} width={scaleSize(20)} />,
  },
  {
    title: 'ApplePay',
    icon: <APPLE_SVG height={scaleSize(20)} width={scaleSize(20)} />,
  },
  {
    title: 'Visa',
    icon: <VISA_SVG height={scaleSize(20)} width={scaleSize(20)} />,
  },
  {
    title: 'Payment on delivery',
    icon: <WALLET_SVG height={scaleSize(20)} width={scaleSize(20)} />,
  },
];
export default function PaymentMethod() {
  const ListHeaderComponet = () => {
    return (
      <View style={{marginVertical: scaleSize(30)}}>
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
                  fontFamily: 'regular',
                  fontSize: scaleFont(15),
                }}>
                SET LOCATION
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          marginTop: scaleSize(20),
          marginHorizontal: scaleSize(25),
          borderRadius: scaleSize(30),
          elevation: 3,
          backgroundColor: COLORS.white,
          paddingVertical: scaleSize(10),
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{marginHorizontal: scaleSize(15)}}>{item.icon}</View>
        <Text
          style={{
            color: '#0F0F0F',
            fontFamily: 'regular',
            fontSize: scaleFont(12),
            flex: 1,
          }}>
          {item.title}
        </Text>
        <View
          style={{
            height: scaleSize(10),
            borderRadius: 60,
            width: scaleSize(10),
            borderColor: 'gray',
            borderWidth: 1,
            marginRight: scaleSize(20),
          }}
        />
      </TouchableOpacity>
    );
  };
  const ListFooterComponent = () => {
    return (
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#BDBDBD',
          marginHorizontal: scaleSize(25),
          padding: scaleSize(15),
          alignItems: 'center',
          marginTop: scaleSize(30),
          borderRadius: scaleSize(30),
        }}>
        <Text
          style={{
            color: '#0F0F0F',
            fontFamily: 'regular',
            fontSize: scaleFont(15),
          }}>
          + Add New Card
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar
        barStyle={'dark-content'}
        // backgroundColor={COLORS.white_light}
        translucent
      />
      <FlatList
        contentContainerStyle={{flex: 1}}
        data={DATA_ITEM}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        ListHeaderComponent={ListHeaderComponet}
        ListFooterComponent={ListFooterComponent}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('SetAddress')}
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
            fontFamily: 'regular',
            fontSize: scaleFont(16),
          }}>
          Done
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
