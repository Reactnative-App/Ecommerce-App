import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
  StatusBar,
} from 'react-native';
import React from 'react';
// import {StatusBar} from 'expo-status-bar';
import {COLORS, SIZES} from '../../Constants/theme';
import {FlatList} from 'react-native';
import {scaleFont, scaleSize, WIDTH} from '../../Constants/Mixins';
import ARROW_SVG from '../../assets/svg/Arrow.svg';
import Icons from 'react-native-vector-icons/Ionicons';
import PROFILEMAN_SVG from '../../assets/svg/ProfileMan.svg';
import CALENDAR_SVG from '../../assets/svg/Calendar.svg';
import CALLING_SVG from '../../assets/svg/Calling.svg';
import MULTIMAN_SVG from '../../assets/svg/MultiMan.svg';
import GENDER_SVG from '../../assets/svg/MultiMan.svg';
import EDIT_SVG from '../../assets/svg/Edit.svg';

const ACCOUNT_DATA = [
  {
    icon: <PROFILEMAN_SVG />,
    title: '@Savannah92',
  },
  {
    icon: <CALENDAR_SVG />,
    title: 'abcde@gmail.com',
  },
  {
    icon: <CALLING_SVG />,
    title: '0522-945-245-651',
  },
  {
    icon: <MULTIMAN_SVG />,
    title: 'Avinash',
  },
  {
    icon: <GENDER_SVG />,
    title: 'Female',
  },
];

export default function Profile() {
  const ListHeaderComponet = () => {
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
                  fontFamily: 'regular',
                  fontSize: scaleFont(15),
                }}>
                Profile
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              backgroundColor: 'white',
              height: scaleSize(84),
              width: scaleSize(84),
              marginTop: scaleSize(20),
              borderRadius: scaleSize(80),
              alignSelf: 'center',
              elevation: 8,
            }}>
            <Pressable
              style={{
                backgroundColor: '#F3D743',
                //use bordr radious to make background color
                // backgroundColor: "#F0F0F0",

                height: scaleSize(25),
                width: scaleSize(25),
                position: 'absolute',
                left: scaleSize(50),
                borderRadius: scaleSize(40),
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => console.log('Camera')}>
              <Icons
                name="camera"
                size={scaleSize(14)}
                color={COLORS.white}
                // style={{ backgroundColor: "#FOFOFO" }}
              />
            </Pressable>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Image
                source={require('../../assets/profile_pic.png')}
                style={{height: scaleSize(32), width: scaleSize(32)}}
              />
            </View>
          </View>
        </View>

        <Text
          style={{
            color: '#000',
            textAlign: 'center',
            fontSize: scaleFont(16),
            fontFamily: 'regular',
            marginTop: scaleSize(10),
          }}>
          Savannah
        </Text>

        <Pressable
          style={{
            height: scaleSize(20),
            width: 85,
            backgroundColor: '#F3D743',
            borderRadius: 5,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: scaleSize(10),
          }}>
          <Text
            style={{
              fontSize: scaleFont(10),
              textAlign: 'center',
              fontFamily: 'regular',
            }}>
            @Savannah92
          </Text>
        </Pressable>
      </View>
    );
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          marginBottom: scaleSize(10),
          marginTop: scaleSize(20),
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
            fontFamily: 'regular',
            fontSize: scaleFont(15),
            marginLeft: scaleSize(10),
          }}>
          {item.title}
        </Text>
        <EDIT_SVG height={scaleSize(20)} width={scaleSize(20)} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar barStyle={'dark-content'} translucent />
      <FlatList
        style={{flex: 1}}
        data={ACCOUNT_DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        ListHeaderComponent={ListHeaderComponet}
      />
    </SafeAreaView>
  );
}
