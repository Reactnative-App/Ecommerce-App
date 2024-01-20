import { StyleSheet, Text,ImageBackground,Image, View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { scaleSize } from '../../Constants/Mixins';
// import { StatusBar } from 'expo-status-bar'

const Screen1 = ({navigation}) => {
  return (
    <>
    <StatusBar barStyle={'dark-content'}/>
    
    <ImageBackground 
    source={require('../../assets/onboard1.png')} style={{height:500, width:"100%",}}
    >
      <View style={{marginTop:40, marginLeft:30,height:30, width:30, backgroundColor:"white", justifyContent:"center", alignItems:"center", borderRadius:10,marginTop:60, marginLeft:30}}>
      <Image source={require('../../assets/onboardicon1.png')} />
      </View>
    </ImageBackground>

        <View style={{position:"absolute", bottom:0, backgroundColor:"#F3D743", height:360, width:362, borderTopLeftRadius:40, borderTopRightRadius:40}}>
        <LinearGradient colors={['#F3D743', '#FECB31']} style={{ position: 'absolute', bottom: 0, height: 300, width: 360, borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
      
            <Text style={{position:"relative", bottom:35, left:30, color:"gray", fontFamily: 'Blinker-Light', fontSize:scaleSize(14)}}>  Your Style Store</Text>
              <View style={{marginTop:5,padding:10, marginLeft:20,position:"relative", bottom:35}}>
                <Text style={{fontSize:scaleSize(50), color: 'black', fontFamily: 'Blinker-Light'}}>Dress Like</Text>
                <Text style={{fontSize:scaleSize(50), color: 'black', fontFamily: 'Blinker-Light'}}>You Are Still</Text>
                <Text style={{fontSize:scaleSize(50), color: 'black', fontFamily: 'Blinker-Light'}}> A Teen</Text>
              </View>
              
              <Text style={{width:"70%", color:"gray", marginLeft:30, fontSize:scaleSize(14), fontFamily: 'Blinker-Light',position:"relative", bottom:35 }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                   <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Login")}>
                    <Text style={{textAlign:"center", color:'#000'}}>Get Started</Text>
                   </TouchableOpacity>
                   </LinearGradient>
            </View>
            </>
            
   
  )
}

export default Screen1

const styles = StyleSheet.create({
    btn:{
      position:'fixed',
      top:10,
      left:'60%',
      width:122,
      height:40,
      padding:10,
      marginRight:20,             
      backgroundColor:'#F3D743',
      borderRadius:20,

     }
})