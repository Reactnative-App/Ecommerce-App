import { ImageBackground, StyleSheet,Image, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
    const status =  AsyncStorage.getItem("alreadyLaunched");
    if(status == true){
        setTimeout(() => {
            navigation.navigate("Onboarding")
         }, 1500);
    }
    else{
        setTimeout(() => {
            navigation.navigate("Login")
         }, 1500);
    }
     
    }, [])
    

  return (
   <ImageBackground source={require('../assets/Bg.png')} style={[styles.container,{height:"100%", width:"100%"}]}>

    <Image source={require('../assets/Logo.png')} style={{height:141, width:226}}/>

    <View style={{position:"absolute", bottom:30}}>
        <Text>Your Style Store</Text>
    </View>

   </ImageBackground>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})