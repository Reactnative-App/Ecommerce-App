import { StyleSheet, Text,Image, View, TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Icons from 'react-native-vector-icons/Ionicons';
import { ImageBackground } from 'react-native';
import { Pressable } from 'react-native';

const ForgotPassPhone = ({navigation}) => {
  return (
    <View style={{marginTop:40}}>
        <StatusBar/>
        <ImageBackground source={require('../../assets/back.png')} style={{height:"100%", width:"100%"}}>
        <Icons name='arrow-back-outline' size={24} style={{marginLeft:20}} onPress={()=>navigation.goBack()}/>
        <ImageBackground source={require('../../assets/ForgotPass.png')} style={{height:390,marginTop:10, width:325, alignSelf:"center"}}>
            <Text style={{textAlign:"center",marginTop:20,fontWeight:"800", fontSize:40, color:"#fff"}}>OVERAY</Text>
        </ImageBackground>

        <Text style={{marginTop:20, marginLeft:20, fontSize:32}}>Password Recovery</Text>
        <Text style={{marginTop:10, marginLeft:20, fontSize:14, color:"gray"}}>Enter Your Phone Number to Recover Password</Text>

        <View style={styles.input}> 
        <Image source={require('../../assets/Icons/phone.png')} style={{marginTop:18, marginRight:10, marginLeft:15}}/>
       {/* <Icons name="call-outline" size={25} color="gray" style={{marginRight:10, marginLeft:10,marginTop:10}}/> */}
       <Text style={{marginTop:15, marginRight:10,color:"gray"}}>+91</Text>
      <TextInput placeholder="Phone Number"  />
    </View>
    <Text style={{marginTop:10, marginLeft:15, fontSize:17,fontWeight:"600",color:"#F3D743"}}>Use Another Method</Text>

    <Pressable style={styles.btn} onPress={()=>navigation.navigate('VerifyCode')}>
        <Text style={{fontSize:14, textAlign:"center", marginTop:7}}>Next</Text>
    </Pressable>

        </ImageBackground>
    </View>
  )
}

export default ForgotPassPhone

const styles = StyleSheet.create({
    input:{
        marginTop:30,
      alignSelf:"center",
        flexDirection:"row",
        backgroundColor:"#e9edf2",
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