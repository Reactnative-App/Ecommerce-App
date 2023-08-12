import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Icons from 'react-native-vector-icons/Ionicons';
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native';
import { TextInput } from 'react-native';

const CreateProfile = ({navigation}) => {
  return (
    <View style={{marginTop:70}}>
      <StatusBar backgroundColor='#FFFCF3' style='dark'/>
   <ImageBackground source={require('../../assets/Profilebg.png')} style={{width:"100%", height:"100%"}}>
   <Icons name='arrow-back-outline' size={24} style={{marginLeft:20}} onPress={()=>navigation.goBack()}/>
   <Text style={{marginLeft:30,marginTop:10, fontSize:20}}>Setup Profile</Text>
    <ImageBackground source={require('../../assets/Profilebg.png')} style={{height:"60%", width:"60%", alignSelf:"center"}}>
       <View style={{backgroundColor:"white", height:84, width:84, marginTop:20, borderRadius:84/2, alignSelf:"center"}}>
          <Pressable style={{backgroundColor:"#F3D743", height:25, width:25,position:"absolute",left:50, borderRadius:40,justifyContent:"center", alignItems:"center"}}
           onPress={()=>console.log("Camera")}
          >
              <Icons name='camera'size={14} color="#fff"/>
          </Pressable>
          <View style={{justifyContent:"center",alignItems:"center", marginTop:20 }}>
          <Image source={require('../../assets/profile_pic.png')} style={{height:32, width:32}}/>
          </View>
       </View>

       <Text style={{marginTop:20, textAlign:"center", fontSize:16}}>Choose Your Image</Text>

       <View style={styles.input}>
       <Icons name="person-outline" size={25} color="gray" style={{marginRight:5, marginLeft:10,marginTop:8}}/>
      <TextInput placeholder="Full Name"  />
    </View>
    <View style={styles.input}>
       <Icons name="calendar-outline" size={25} color="gray" style={{marginRight:5, marginLeft:10,marginTop:8}}/>
      <TextInput placeholder="Date of Birth"  />
    </View>
    <View style={styles.input}>
       <Icons name="location-outline" size={25} color="gray" style={{marginRight:5, marginLeft:10,marginTop:8}}/>
      <TextInput placeholder="Region" />
    </View>
    <View style={styles.input}>
       <Icons name="people-outline" size={25} color="gray" style={{marginRight:5, marginLeft:10,marginTop:8}}/>
      <TextInput placeholder="Gender"  />
      <MIcons name="pencil-outline" size={25} color="gray" style={{marginTop:10, marginLeft:200 }}/>
    </View>


    <View>
      
    </View>

    <View style={{flexDirection:"row", justifyContent:"space-around", alignItems:"center", marginTop:30,}}>
      <Pressable style={[styles.btn,{width:70,marginRight:20,backgroundColor:"transparent"} ]} onPress={()=>{navigation.navigate('ForgotPass')}} >
      <Text style={{color:"#000"}}>Skip</Text>
    </Pressable>
    <Pressable style={styles.btn} >
      <Text style={{color:"#000"}}>Go To Shopping</Text>
    </Pressable>
      
      </View>
      


      
    </ImageBackground>
   </ImageBackground>
    </View>
  )
}

export default CreateProfile

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
    padding:15,
    backgroundColor:"#F3D743",
    borderRadius:20,
   
 
}
})