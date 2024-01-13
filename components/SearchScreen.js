import {View, Text, TextInput, Switch} from 'react-native';
import React, {useRef} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {COLORS} from '../Constants/theme';
// import {StatusBar} from 'expo-status-bar';
import {HEIGHT, WIDTH, scaleFont, scaleSize} from '../Constants/Mixins';
import ARROW_SVG from '../assets/svg/Arrow.svg';
import DEBIT_CARD from '../assets/debitcard.png';
import {ScrollView} from 'react-native';
import {ImageBackground} from 'react-native';
import APPLE_SVG from '../assets/svg/apple.svg';
import NAVI_ARRW_SVG from '../assets/svg/navigateArrw.svg';
import SEARCH_SVG from '../assets/svg/Search.svg';
import FILTER_SVG from '../assets/svg/Filter.svg';
import CLOSE_SVG from '../assets/svg/close.svg';
import {Pressable} from 'react-native';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native';
import ProductCartView from './ProductCartView';
import RBSheet from 'react-native-raw-bottom-sheet';
const PRIVECY_DATA = [
  {
    title: 'Categories',
  },
  {
    title: 'Size',
  },
  {
    title: 'Color',
  },
  {
    title: 'Price',
  },
  {
    title: 'Brand',
  },
];
export default function SearchScreen(props) {
  const refRBSheet = useRef();
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          marginBottom: scaleSize(10),
          backgroundColor: COLORS.white,
          padding: scaleSize(15),
          flexDirection: 'row',
          marginHorizontal: scaleSize(25),
          elevation: 2,
          borderRadius: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {/* {item.icon} */}
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
        <NAVI_ARRW_SVG height={scaleSize(20)} width={scaleSize(20)} />
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
      <View style={{marginTop: scaleSize(50)}}>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            marginRight: scaleSize(25),
          }}>
          <CLOSE_SVG />
        </View>
        <View
          style={{
            marginTop: scaleSize(20),
            marginHorizontal: scaleSize(25),
            borderRadius: scaleSize(30),
            elevation: 3,
            backgroundColor: COLORS.white,
            paddingVertical: scaleSize(15),
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <SEARCH_SVG
            height={scaleSize(20)}
            width={scaleSize(20)}
            style={{marginHorizontal: scaleSize(10)}}
          />
          <TextInput placeholder="Find an address..." style={{flex: 1}} />

          <View
            style={{
              height: '100%',
              width: 1,
              backgroundColor: '#BDBDBD',
              marginLeft: scaleSize(5),
            }}
          />
          <FILTER_SVG
            height={scaleSize(20)}
            width={scaleSize(20)}
            style={{marginHorizontal: scaleSize(10)}}
            onPress={() => refRBSheet.current.open()}
          />
        </View>
        <Text
          style={{
            marginTop: scaleSize(30),
            marginLeft: scaleSize(25),
            fontFamily: 'Regular',
            fontSize: scaleFont(25),
            color: COLORS.black,
          }}>
          You Also Viewed
        </Text>
        <View style={{marginLeft: scaleSize(30), marginTop: scaleSize(20)}}>
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={({item}) => <ProductCartView />}
            horizontal={false}
            numColumns={2}
            // contentContainerStyle={{ columnGap: 16 }}
            // ListHeaderComponent={ListHeader}
          />
        </View>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        openDuration={300}
        closeDuration={300}
        dragFromTopOnly={true}
        height={HEIGHT / 2}
        customStyles={{
          container: {
            borderTopLeftRadius: scaleSize(30),
            borderTopRightRadius: scaleSize(30),
          },
          // draggableIcon: {
          //   backgroundColor: Colors.WHITE
          // }
        }}>
        <FlatList
          // contentContainerStyle={{  }}
          data={PRIVECY_DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
        />
        <TouchableOpacity
          // onPress={() => navigation.navigate("SetAddress")}
          style={{
            marginHorizontal: scaleSize(25),
            marginBottom: scaleSize(20),
            backgroundColor: '#F3D743',
            padding: scaleSize(15),
            alignItems: 'center',
            borderRadius: scaleSize(30),
            // alignContent: "flex-end",
          }}>
          <Text
            style={{
              color: '#0F0F0F',
              fontFamily: 'regular',
              fontSize: scaleFont(16),
            }}>
            Apply Filter
          </Text>
        </TouchableOpacity>
      </RBSheet>
    </SafeAreaView>
  );
}
