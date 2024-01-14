import { StyleSheet, Text,ImageBackground,Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Screen1 = ({navigation}) => {
  return (
    <>
    <StatusBar style='light'/>
    
    <ImageBackground source={require('../../assets/onboard1.png')} style={{height:526, width:"100%",}}>
      <View style={{marginTop:40, marginLeft:30,height:30, width:30, backgroundColor:"white", justifyContent:"center", alignItems:"center", borderRadius:10}}>
      <Image source={require('../../assets/onboardicon1.png')}/>
      </View>
    </ImageBackground>

        <View style={{position:"absolute", bottom:0, backgroundColor:"#F3D743", height:300, width:360, borderTopLeftRadius:40, borderTopRightRadius:40}}>
            <Text style={{marginLeft:30, marginTop:10, color:"gray"}}>  Your Style Store</Text>
              <View style={{marginTop:5,padding:10, marginLeft:20}}>
                <Text style={{fontSize:25}}>Dress Like</Text>
                <Text style={{fontSize:25}}>You Are Still</Text>
                <Text style={{fontSize:25}}>A Teen</Text>
              </View>
              <Text style={{width:"70%", color:"gray", marginLeft:20}}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                   <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Login")}>
                    <Text style={{textAlign:"center"}}>Get Started</Text>
                   </TouchableOpacity>
            </View>
            </>
            
   
  )
}

export default Screen1

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