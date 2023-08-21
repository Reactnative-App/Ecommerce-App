import { StyleSheet,Image, Text, View, TextInput, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import Icons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';

const LoginScreen = ({navigation}) => {

  return (

    <ScrollView contentContainerStyle={{flex:1, backgroundColor:"#FFFDF6"}}>
        <StatusBar backgroundColor='#F39184' style='light'/>
    
       <Image source={require('../../assets/Header.png')} style={{height:330,marginTop:10,width:360, borderBottomLeftRadius:20, borderBottomRightRadius:20}}/>
       <Text style={{fontSize:20, marginTop:10, fontWeight:"400", marginLeft:20}}>Create Your Account</Text>

       <View style={{flexDirection:"row",marginTop:10, }}>
        <View style={{backgroundColor:"#fff", height:50, width:50, marginLeft:30,borderTopLeftRadius:20,elevation:1, borderBottomLeftRadius:20,justifyContent:"center",alignItems:"center", flexDirection:"row"}}>
            <Icons name="mail-outline" size={20} />
        </View>
        <TextInput keyboardType='email' placeholder='Email Address' style={styles.input}/>
       </View>
       <View style={{flexDirection:"row",marginTop:10, }}>
        <View style={{backgroundColor:"#fff", height:50, width:50, marginLeft:30,borderTopLeftRadius:20,elevation:1, borderBottomLeftRadius:20,justifyContent:"center",alignItems:"center", flexDirection:"row"}}>
            <Icons name="call-outline" size={20} />
        </View>
        <TextInput keyboardType='number-pad' placeholder='Phone Number' style={styles.input}/>
       </View>
       <View style={{flexDirection:"row",marginTop:10, }}>
        <View style={{backgroundColor:"#fff", height:50, width:50, marginLeft:30,borderTopLeftRadius:20,elevation:1, borderBottomLeftRadius:20,justifyContent:"center",alignItems:"center", flexDirection:"row"}}>
            <Icons name="lock-closed-outline" size={20}/>
           
        </View>
        <View style={{width:"90%", flexDirection:"row", justifyContent:"center", alignItems:"Ce"}}>
        <TextInput placeholder=' Password' secureTextEntry={true} style={styles.input} />
        <View style={{marginTop:10, marginRight:100}}>
        <Icons name='eye-outline' size={20}/>
        </View>
        </View>
       </View>

       <View style={{flexDirection:"row",alignSelf:"center", marginTop:10, justifyContent:"space-around" }}>
       <View style={{height:20,width:20, borderRadius:8, borderColor:"gray", borderWidth:1}}></View>
        <Text style={{marginLeft:10, }}>I agree with <Text style={{color:"#EED443"}}>Terms of Service & Privacy Policy</Text></Text>
       </View>

       
      <View style={{flexDirection:"row",width:"90%", justifyContent:"space-around"}}>
      <TouchableOpacity style={[styles.btn,{backgroundColor:"#fff"}]} onPress={()=>navigation.navigate('CreateAccount')}>
          <Text style={{color:"#000", textAlign:"center", fontSize:14}}>Sign In</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("CreateProfile")}>
          <Text style={{color:"#000", textAlign:"center", fontSize:14}}>Sign Up</Text>
       </TouchableOpacity>
      </View>
      

       

      <View style={{marginLeft:20, marginTop:4}}>
      <Text style={{fontSize:12}}>By creating an account or logging in, you agree With Overay<Text style={{height:10, width:10}}></Text></Text>
       
       <View style={{flexDirection:"row",marginLeft:60 }}>
       <Text style={{fontSize:12, fontWeight:"600",color:"#737171" }}>Terms & Conditions</Text>
       <Text style={{fontSize:12,textAlign:"center"}}> and</Text>
       <Text style={{fontSize:12, fontWeight:"600",  color:"#737171"}}> Privacy Policy</Text>
       </View>
       
      </View>
   
    </ScrollView>
  
  )
}

export default LoginScreen

const styles = StyleSheet.create({ 
    input:{
        height:50,
        width:"70%",
        backgroundColor:"#fff",
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        elevation:1
    },
    btn:{
        height:40,
        backgroundColor:"#F3D743",
        width:155,
        marginLeft:30,
        marginTop:20,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    },
    socialBtn:{
        padding:15,
        backgroundColor:"#fff",
        marginTop:10,
        width:"90%",
        alignSelf:"center",
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",

    }
})