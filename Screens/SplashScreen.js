import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OVERAY_BG from '../assets/Overay_bg.png';
import LOGO from '../assets/Logo.png';
import {HEIGHT, WIDTH, scaleSize} from '../Constants/Mixins';
import LottieView from 'lottie-react-native';
const SplashScreen = ({navigation}) => {
  
  const lottieRef = useRef(null);
  useEffect(() => {
    const status = AsyncStorage.getItem('alreadyLaunched');
    if (status == true) {
      setTimeout(() => {
        navigation.navigate('Onboarding');
      }, 1500);
    } else {
      setTimeout(() => {
        navigation.navigate('Onboarding');
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

{/* <LottieView
        opacity={1}
        ref={lottieRef}
        source={require('../assets/Demo.json')} // Replace with your Lottie animation JSON file
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
            flex: 1,
        }}
        loop={true}
      /> */}

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
