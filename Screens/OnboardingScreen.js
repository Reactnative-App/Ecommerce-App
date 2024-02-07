import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import Screen1 from './OnboardingScreens/Screen1'
import Screen2 from './OnboardingScreens/Screen2'
import Screen3 from './OnboardingScreens/Screen3'
import Screen4 from './OnboardingScreens/Screen4'
import { scaleSize } from '../Constants/Mixins'

const OnboardingScreen = ({ navigation }) => {

  return (
    <Swiper
      showsPagination
      paginationStyle={{
        bottom: scaleSize(40),
        right: null,
        left: scaleSize(30)
         }}
      activeDot={<View style={{ backgroundColor: '#0F0F0F', width: scaleSize(30), height: scaleSize(4), borderRadius: scaleSize(6), marginHorizontal: scaleSize(5) }} />}
      dot={<View style={{ backgroundColor: '#bdbdbd', width: scaleSize(8), height: scaleSize(4), borderRadius: scaleSize(6), marginHorizontal: scaleSize(5) }} />}
      // dotStyle={{backgroundColor:'red'}}
    >
      <Screen1 navigation={navigation} />
      <Screen2 navigation={navigation} />
      <Screen3 navigation={navigation} />
      <Screen4 navigation={navigation} />
    </Swiper>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({})