import {View, Text, FlatList, ImageBackground, StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
// import { StatusBar } from "expo-status-bar";
import {COLORS} from '../Constants/theme';
import {HEIGHT, WIDTH, scaleFont, scaleSize} from '../Constants/Mixins';
import ARROW_SVG from '../assets/svg/Arrow.svg';
import SEARCH_SVG from '../assets/svg/Search_black.svg';
import NOTIFICATION_SVG from '../assets/svg/Notification_black.svg';
import BackGround from '../assets/Mask_group.png';
import IMG_PROFILE from '../assets/onboard4.png';
import {Image} from 'react-native';
import NAVI_ARRW_SVG from '../assets/svg/navigateArrw.svg';
import WALLET_SVG from '../assets/svg/Wallet.svg';
import BAG_SVG from '../assets/svg/Bag.svg';
import SETTINGS_SVG from '../assets/svg/Setting.svg';
import CHAT_SVG from '../assets/svg/Chat.svg';
import PAYMENT_SVG from '../assets/svg/Payment.svg';
import BOTTOM_BOOKMARK_SVG from '../assets/svg/Bottom_Bookmark.svg';
import LOCATION_SVG from '../assets/svg/Location.svg';
import DISCOUNT_SVG from '../assets/svg/Discount.svg';
import LOCK_SVG from '../assets/svg/Lock.svg';
import PASSWORD_SVG from '../assets/svg/Password.svg';
import LOGOUT_SVG from '../assets/svg/Logout.svg';
import { useNavigation } from '@react-navigation/native';
import VECTOR_SVG from '../assets/svg/Vector.svg';
import {TouchableOpacity} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const ACCOUNT_DATA = [
  {
    icon: <SETTINGS_SVG />,
    title: 'Preferences',
  },
  {
    icon: <CHAT_SVG />,
    title: 'Chat List',
  },
  {
    icon: <PAYMENT_SVG />,
    title: 'Payment',
  },
  {
    icon: <BOTTOM_BOOKMARK_SVG />,
    title: 'Wishlist',
  },
  {
    icon: <LOCATION_SVG />,
    title: 'Addresses',
  },
];
const PRIVECY_DATA = [
  {
    icon: <LOCK_SVG />,
    title: 'Privacy Setting',
  },
  {
    icon: <PASSWORD_SVG />,
    title: 'Change Password',
  },
];
const HELP_SUPPORT_DATA = [
  {
    icon: <SEARCH_SVG />,
    title: 'FAQ',
  },
  {
    icon: <VECTOR_SVG />,
    title: 'Get Help',
  },
  {
    icon: <LOGOUT_SVG />,
    title: 'Sign Out',
  },
];
export default function Account() {
  const navigation = useNavigation();
  const ListHeaderComponet = () => {
    return (
      <View>
        <ImageBackground
          source={BackGround}
          style={{
            height: HEIGHT / 3,
            width: WIDTH,
            marginTop: scaleSize(-30),
          }}
          resizeMode="contain">
          <View
            style={{
              flexDirection: 'row',
              marginTop: scaleSize(90),
              justifyContent: 'space-between',
              marginHorizontal: scaleSize(25),
              alignItems: 'center',
            }}>
            <ARROW_SVG
              height={scaleSize(20)}
              width={scaleSize(20)}
              // style={{ marginLeft: scaleSize(20) }}
              onPress={() => navigation.goBack()}
            />
            <View style={{flexDirection: 'row'}}>
              <SEARCH_SVG
                height={scaleSize(20)}
                width={scaleSize(20)}
                style={{marginHorizontal: scaleSize(15)}}
              />
              <NOTIFICATION_SVG height={scaleSize(20)} width={scaleSize(20)} />
            </View>
          </View>

      
          <View 
            style={{
              flexDirection: 'row',
              marginHorizontal: scaleSize(25),
              marginVertical: scaleSize(20),
              alignItems: 'center',
            }}>
            <Image
              source={IMG_PROFILE}
              style={{
                height: scaleSize(65),
                width: scaleSize(65),
                borderRadius: scaleSize(30),
              }}
              resizeMode="cover"
            />
            <View style={{marginLeft: scaleSize(10), flex: 1}}>
              <Text style={{fontSize: scaleFont(16), color:'#000', fontFamily: 'Blinker-Regular'}}>Savannah Rathore</Text>
              <View
                style={{
                  backgroundColor: COLORS.white,
                  paddingVertical: scaleSize(4),
                  paddingHorizontal: scaleSize(10),
                  alignItems: 'center',
                  marginTop: scaleSize(5),
                  borderRadius: scaleSize(5),
                  alignSelf: 'flex-start',
                }}>
                <Text style={{fontSize: scaleFont(10), color:'gray', fontFamily: 'Blinker-Regular'}}>@Savannah92</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
            <NAVI_ARRW_SVG height={scaleSize(20)} width={scaleSize(20)} />
            </TouchableOpacity>
           
          </View>
 
 


          <View
            style={{
              marginHorizontal: scaleSize(25),
              paddingHorizontal: scaleSize(50),
              borderRadius: scaleSize(50),
              elevation: 3,
              padding: scaleSize(20),
              backgroundColor: COLORS.white,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <WALLET_SVG height={scaleSize(20)} width={scaleSize(20)} />
              <Text
                style={{
                  color: '#717171',
                  fontFamily: 'Blinker-Regular',
                  fontSize: scaleFont(12),
                }}>
                Wallet
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems: 'center'}}>
              <BAG_SVG height={scaleSize(20)} width={scaleSize(20)} />
              <Text
                style={{
                  color: '#717171',
                  fontFamily: 'Blinker-Regular',
                  fontSize: scaleFont(12),
                }}>
                Order
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems: 'center'}}>
              <DISCOUNT_SVG height={scaleSize(20)} width={scaleSize(20)} />
              <Text
                style={{
                  color: '#717171',
                  fontFamily: 'Blinker-Regular',
                  fontSize: scaleFont(12),
                }}>
                Discount
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Text
          style={{
            color: '#717171',
            fontFamily: 'Blinker-Regular',
            fontSize: scaleFont(15),
            marginLeft: scaleSize(25),
            marginTop: scaleSize(30),
          }}>
          Account
        </Text>
      </View>
    );
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          marginBottom: scaleSize(10),
          backgroundColor: COLORS.white,
          padding: scaleSize(15),
          flexDirection: 'row',
          marginHorizontal: scaleSize(25),
          elevation: 0.5,
          borderRadius: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {item.icon}
        <Text
          style={{
            flex: 1,
            color: '#0F0F0F',
            fontFamily: 'Blinker-Regular',
            fontSize: scaleFont(15),
            marginLeft: scaleSize(10),
          }}>
          {item.title}
        </Text>
        <NAVI_ARRW_SVG height={scaleSize(20)} width={scaleSize(20)} />
      </TouchableOpacity>
    );
  };
  const ListFooterComponent = () => {
    return (
      <>
       <StatusBar
          barStyle={'dark-content'}
          translucent
          backgroundColor="transparent"
        />
        <Text
          style={{
            color: '#717171',
            fontFamily: 'Blinker-Regular',
            fontSize: scaleFont(15),
            marginLeft: scaleSize(25),
            marginTop: scaleSize(30),
          }}>
          Privacy
        </Text>

        <FlatList
          // contentContainerStyle={{  }}
          data={PRIVECY_DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          // ListHeaderComponent={ListHeaderComponet}
          // ListFooterComponent={ListFooterComponent}
        />
        <Text
          style={{
            color: '#717171',
            fontFamily: 'Blinker-Regular',
            fontSize: scaleFont(15),
            marginLeft: scaleSize(25),
            marginTop: scaleSize(30),
          }}>
          Help & Support
        </Text>

        <FlatList
          // contentContainerStyle={{  }}
          data={HELP_SUPPORT_DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
        />
      </>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white, marginBottom:scaleSize(50)}}>
      <StatusBar barStyle={'dark-content'} translucent />
      {/* <StatusBar
        barStyle={'dark-content'}
        // backgroundColor={COLORS.white_light}
        translucent
      /> */}
      <FlatList
        style={{flex: 1}}
        data={ACCOUNT_DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        ListHeaderComponent={ListHeaderComponet}
        ListFooterComponent={ListFooterComponent}
      />
    </SafeAreaView>
  );
}
