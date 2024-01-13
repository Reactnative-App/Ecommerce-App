import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OVERAY_BG from '../assets/Overay_bg.png';
import LOGO from '../assets/Logo.png';
import {HEIGHT, WIDTH, scaleSize} from '../Constants/Mixins';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const status = AsyncStorage.getItem('alreadyLaunched');
    if (status == true) {
      setTimeout(() => {
        navigation.navigate('Onboarding');
      }, 1500);
    } else {
      setTimeout(() => {
        navigation.navigate('Login');
      }, 1500);
    }
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <ImageBackground
        source={OVERAY_BG}
        style={styles.container}
        resizeMode="cover">
        <View style={styles.logoContainer}>
          <Image source={LOGO} style={styles.logoStyle} resizeMode="cover" />
        </View>
        <View style={styles.textContainer}>
          <Text>Your Style Store</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: HEIGHT,
    width: WIDTH,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  logoStyle: {
    height: scaleSize(141),
    width: scaleSize(226),
  },
  textContainer: {
    alignItems: 'flex-end',
    flex: 0.1,
  },
});
