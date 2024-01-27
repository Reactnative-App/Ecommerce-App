import { StyleSheet, Text,Image,TouchableOpacity, View, StatusBar } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { scaleSize } from '../../Constants/Mixins';
// import { StatusBar } from 'expo-status-bar'
// import { LinearGradient } from 'expo-linear-gradient'

const Screen3 = ({navigation}) => {
  return (
    <>
    
    <View style={{flex:1}}>

    <StatusBar
          barStyle={'dark-content'}
          translucent
          backgroundColor="transparent"
        />
        {/* <LinearGradient
        colors={["#46CDCD", "#2E8C8C", "#1C5757"]}
        style={{ flex: 1, paddingBottom: 10 }}
        > */}
           <Image source={require('../../assets/onboardicon2.png')} style={{marginTop:60, marginLeft:30}}/>
           <Image source={require('../../assets/onboard3.png')} style={{height:250, width:300, alignSelf:"center", marginTop:40, borderRadius:40}}/>
           <Text style={{marginLeft:30, marginTop:40,fontSize:14, fontFamily: 'Blinker-Regular', color:'gray'}}>  Your Style Store</Text>
           <View style={{marginTop:5,padding:10, marginLeft:20}}>
                <Text style={{fontSize: scaleSize (30),fontSize:50, fontFamily: 'Blinker-Light', color:'#000'}}>The Best</Text>
                <Text style={{fontSize: scaleSize (30),fontSize:50, fontFamily: 'Blinker-Light', color:'#000'}}>Hand-Picked</Text>
                <Text style={{fontSize: scaleSize (30),fontSize:50, fontFamily: 'Blinker-Light', color:'#000'}}>Style</Text>
              </View>
              <Text style={{width:"70%", color:"gray", marginLeft:30, fontSize:scaleSize(14), fontFamily: 'Blinker-Light' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
              
              <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Login')}>
                    <Text style={{textAlign:"center", color:'#000'}}>Get Started</Text>
                   </TouchableOpacity>
        {/* </LinearGradient> */}
    </View>
    </>
  )
}

export default Screen3

const styles = StyleSheet.create({
    btn:{
    //   marginLeft:210,
    //   marginBottom:10,
    //   width:120,
    //   height:40,
    //   padding:10,
    //  marginRight:20,
    //   backgroundColor:'#F3D743',
    //   borderRadius:20,
    //   marginTop:70 

    position: 'fixed',
    top: scaleSize(80),
    left: '60%',
    width: scaleSize(122),
    height: scaleSize(40),
    padding: scaleSize(10),
    marginRight: scaleSize(20),
    backgroundColor: '#F3D743',
    borderRadius: scaleSize(20),
    Bottom: scaleSize(20),
     }
})