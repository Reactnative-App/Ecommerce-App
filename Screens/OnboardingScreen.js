import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import Screen1 from './OnboardingScreens/Screen1'
import Screen2 from './OnboardingScreens/Screen2'
import Screen3 from './OnboardingScreens/Screen3'
import Screen4 from './OnboardingScreens/Screen4'

const OnboardingScreen = ({navigation}) => {
  return (
   <Swiper>
     <Screen1 navigation={navigation}/>
     <Screen2 navigation={navigation}/>
     <Screen3 navigation={navigation}/>
     <Screen4 navigation={navigation}/>
   </Swiper>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({})