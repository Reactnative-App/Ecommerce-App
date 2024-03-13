import { StyleSheet, Text,Image,TouchableOpacity, View, StatusBar, ImageBackground } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { scaleSize, scaleFont } from '../../Constants/Mixins';
import { COLORS } from '../../Constants';
// import { StatusBar } from 'expo-status-bar'
// import { LinearGradient } from 'expo-linear-gradient'

const Screen2 = ({navigation}) => {
  return (
    <>
    <StatusBar
          barStyle={'light-content'}
          translucent
          backgroundColor="transparent"
        />
    <View style={{flex:1}}>
    <ImageBackground
          source={require('../../assets/back.png')}
          style={styles.backgroundImage}
        >
        
        {/* <LinearGradient
        colors={["#46CDCD", "#2E8C8C", "#1C5757"]}
        style={{ flex: 1, paddingBottom: 10 }}
        > 
         */}

           <Image source={require('../../assets/onboardicon2.png')} style={{marginTop:60, marginLeft:30}}/>
           <Image source={require('../../assets/onboard2.png')} style={{height:300, width:300, alignSelf:"center", marginTop:50}}/>
           <Text style={{marginLeft:30, marginTop:30,  fontSize:scaleSize (14), fontFamily: 'Blinker-Regular', color:'gray'}}>  Your Style Store</Text>
           <View style={{marginTop:5,padding:10, marginLeft:20}}>
                <Text style={{fontSize:scaleFont (50), fontFamily: 'Blinker-Light', color:'#000'}}>A Classic</Text>
                <Text style={{fontSize:scaleFont (50), fontFamily: 'Blinker-Light', color:'#000'}}>That Loved</Text>
                <Text style={{fontSize:scaleFont (50), fontFamily: 'Blinker-Light', color:'#000'}}>By All</Text>
              </View>

              <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('ProductListing')}>
                    <Text style={{textAlign:"center", color:'#000'}}>Get Started</Text>
                   </TouchableOpacity>
        {/* </LinearGradient> */}
        </ImageBackground>
    </View>
    </>
  )
}

export default Screen2

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
      //   marginTop:60  

      position: 'fixed',
    top: scaleSize(70),
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