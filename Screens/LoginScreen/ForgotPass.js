import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Icons from 'react-native-vector-icons/Ionicons';
import { ImageBackground } from 'react-native';
import { Pressable } from 'react-native';
import { Image } from 'react-native';

const ForgotPass = ({navigation}) => {
  return (
    <View style={{flex:1,marginTop:40}}>
        <StatusBar/>
       <ImageBackground source={require('../../assets/back.png')} style={{height:"100%", width:"100%"}}>
       <Icons name='arrow-back-outline' size={24} style={{marginLeft:20}} onPress={()=>navigation.goBack()}/>
        <ImageBackground source={require('../../assets/ForgotPass.png')} style={{height:390, width:325, alignSelf:"center"}}>
            <Text style={{textAlign:"center",marginTop:20,fontWeight:"800", fontSize:40, color:"#fff"}}>OVERAY</Text>
        </ImageBackground>

        <Text style={{marginTop:20, marginLeft:20, fontSize:32}}>Password Recovery</Text>
        <Text style={{marginTop:10, marginLeft:20, fontSize:14, color:"gray"}}>Enter Your E-Mail to Recover Password</Text>

        <View style={styles.input}>
            <Image source={require('../../assets/Icons/Mail.png')} style={{marginTop:15, marginRight:10, marginLeft:10}}/>
       {/* <Icons name="mail-outline" size={25} color="gray" style={{marginRight:10, marginLeft:10,marginTop:10}}/> */}
      <TextInput placeholder="Email address"  />
    </View>
    <Text style={{marginTop:10, marginLeft:15, fontSize:17,fontWeight:"600",color:"#F3D743"}}>Use Another Method</Text>

    <Pressable style={styles.btn} onPress={()=>navigation.navigate('ForgotPass2')}>
        <Text style={{fontSize:14, textAlign:"center", marginTop:7}}>Next</Text>
    </Pressable>

       </ImageBackground>
    </View>
  )
}

export default ForgotPass

const styles = StyleSheet.create({
    input:{
        marginTop:30,
      alignSelf:"center",
        flexDirection:"row",
        backgroundColor:"#FFF",
    height:50,
      width:325,
      borderRadius:40,
      elevation:4
      },
      btn:{
        height:40,
        width:325,
        backgroundColor:"#F3D743",
        borderRadius:40,
        alignSelf:"center",
        marginTop:30
      }
})