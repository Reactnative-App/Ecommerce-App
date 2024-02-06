import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
// import Ionicons from "@expo/vector-icons/Ionicons";Bottom_1
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import ForgotPass from '../Screens/LoginScreen/ForgotPass';
import BOTTOM_1_SVG from '../assets/svg/Bottom_1.svg';
import BOTTOM_HOME_SVG from '../assets/svg/Bottom_Home.svg';
import BOTTOM_BAG_SVG from '../assets/svg/Bottom_Bag.svg';
import BOTTOM_PROFILE_SVG from '../assets/svg/Bottom_Profile.svg';
import BOTTOM_BOOKMARK_SVG from '../assets/svg/Bottom_Bookmark.svg';
import {scaleSize} from '../Constants/Mixins';
import HomeScreen from '../Screens/HomeScreen';
import Account from '../components/Account';
import Cart from '../Screens/OnboardingScreens/Cart';
import WishList from '../Screens/OnboardingScreens/WishList';
const Screen1 = () => {
  return <HomeScreen />;
};

const Screen2 = () => {
  return <Cart />;
};
const Screen3 = () => {
  return <WishList />;
};
const Screen4 = () => {
  return <Account />;
};
export default function BottomTabNavigation() {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'title1':
        icon = <BOTTOM_1_SVG height={scaleSize(20)} width={scaleSize(20)} />;
        break;
      case 'title2':
        icon = <BOTTOM_BAG_SVG height={scaleSize(20)} width={scaleSize(20)} />;
        break;
      case 'title4':
        icon = (
          <BOTTOM_BOOKMARK_SVG height={scaleSize(20)} width={scaleSize(20)} />
        );
        break;
      case 'title5':
        icon = (
          <BOTTOM_PROFILE_SVG height={scaleSize(20)} width={scaleSize(20)} />
        );
        break;
    }

    return (
      // <Ionicons
      //   name={icon}
      //   size={25}
      //   color={routeName === selectedTab ? "black" : "gray"}
      // />
      <View>{icon}</View>
    );
  };
  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <CurvedBottomBar.Navigator
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={55}
        circleWidth={20}
        screenOptions={{headerShown: false}}
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight
        renderCircle={({selectedTab, navigate}) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => Alert.alert('Click Action')}>
              {/* <Ionicons name={"apps-sharp"} color="gray" size={25} /> */}

              <BOTTOM_HOME_SVG height={scaleSize(20)} width={scaleSize(20)} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          name="title1"
          position="LEFT"
          component={() => <Screen1 />}
        />
        <CurvedBottomBar.Screen
          name="title2"
          component={() => <Screen2 />}
          position="LEFT"
        />
        <CurvedBottomBar.Screen
          name="title4"
          component={() => <Screen3 />}
          position="RIGHT"
        />
        <CurvedBottomBar.Screen
          name="title5"
          component={() => <Screen4 />}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});
