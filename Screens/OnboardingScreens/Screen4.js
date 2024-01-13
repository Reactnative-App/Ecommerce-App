import { StyleSheet, Text,Image,TouchableOpacity, View, StatusBar } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
// import { StatusBar } from 'expo-status-bar'
// import { LinearGradient } from 'expo-linear-gradient'

const Screen4 = ({navigation}) => {
  return (
    <>
    <StatusBar barStyle={'dark-content'}/>
    <View style={{flex:1}}>
        <LinearGradient
        colors={["#46CDCD", "#2E8C8C", "#1C5757"]}
        style={{ flex: 1, paddingBottom: 10 }}
        >
           <Image source={require('../../assets/onboardicon2.png')} style={{marginTop:40, marginLeft:30}}/>
           <Image source={require('../../assets/onboard4.png')} style={{height:300, width:300, alignSelf:"center", marginTop:40}}/>
           <Text style={{marginLeft:30, marginTop:10}}>  Your Style Store</Text>
           <View style={{marginTop:5,padding:10, marginLeft:20}}>
                <Text style={{fontSize:30}}>A Classic</Text>
                <Text style={{fontSize:30}}>That Loved</Text>
                <Text style={{fontSize:30}}>By All</Text>
              </View>

              <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Login')}>
                    <Text style={{textAlign:"center"}}>Get Started</Text>
                   </TouchableOpacity>
        </LinearGradient>
    </View>
    </>
  )
}

export default Screen4

const styles = StyleSheet.create({
    btn:{
        marginLeft:210,
        marginBottom:10,
        width:140,
        padding:10,
       marginRight:20,
        backgroundColor:"yellow",
        borderRadius:10  
     }
})