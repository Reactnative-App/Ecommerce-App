import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Pressable, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import Icons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const LoginScreen = ({ navigation }) => {
  return (

    <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: "#FFFDF6" }}>
      <StatusBar backgroundColor='#F39184' style='light' />

      <ImageBackground source={require('../../assets/Header.png')} imageStyle={{ borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} style={{ height: hp('41%'), marginTop: 25, width: wp('100%'), alignSelf: "center" }}>
        <Icons name='arrow-back-outline' size={20} style={{ marginTop: 30, marginLeft: 30 }} onPress={() => navigation.goBack()} />
      </ImageBackground>
      <Text style={{ fontSize: 32, marginTop: 10, fontWeight: "400", marginLeft: 20 ,fontFamily:"regular" }}>Welcome Back</Text>

      <View style={styles.input}>
        <Image source={require('../../assets/Icons/phone.png')} style={{ marginTop: 18, marginRight: 10, marginLeft: 15 }} />
        {/* <Icons name="call-outline" size={25} color="gray" style={{marginRight:10, marginLeft:10,marginTop:10}}/> */}
        <Text style={{ marginTop: 15, marginRight: 10, color: "gray" }}>+91   </Text>
        <View style={styles.verticleLine}></View>
        <TextInput placeholder="Phone Number" style={{marginLeft:10}} />
        
      </View>
 
      

      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "#000", textAlign: "center", fontSize: 14 }}>Continue With OTP</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24 }}>
        <View style={styles.left} />
        <View>
          <Text style={{ width: 100, textAlign: 'center', color: '#717171', }}>Or Sign In With</Text>
        </View>
        <View style={styles.right} />
      </View>

      <View style={{ elevation: 1 }}>
        <Pressable style={styles.socialBtn} onPress={() => { navigation.navigate('LoginWithEmail') }}>
          <Image source={require('../../assets/Icons/Email.png')} style={{ marginTop: 6, marginRight: 10, marginLeft: 10 }} />
          {/* <Icons name="mail-outline" size={20} style={{marginRight:20}} /> */}
          <Text style={{ textAlign: "center" }}>Continue With Email</Text>
        </Pressable >
        <Pressable style={styles.socialBtn}>
          <Image source={require('../../assets/google.png')} style={{ height: 18, width: 18, marginRight: 15 }} />
          <Text>Sign In With Google</Text>
        </Pressable>
        <Pressable style={styles.socialBtn}>
          <Image source={require('../../assets/facebook.png')} style={{ height: 18, width: 18, marginRight: 15 }} />
          <Text>Sign In With Facebook</Text>
        </Pressable>
      </View>

      <View style={{ alignSelf: "center", marginTop: 4 }}>
        <Text style={{ fontSize: 12 }}>By creating an account or logging in, you agree With Overay</Text>
        <View style={{ flexDirection: "row", marginLeft: 60 }}>
          <Text style={{ fontSize: 12, fontWeight: "600", color: "#737171" }}>Terms & Conditions</Text>
          <Text style={{ fontSize: 12, textAlign: "center" }}> and</Text>
          <Text style={{ fontSize: 12, fontWeight: "600", textAlign: "center", color: "#737171" }}> Privacy Policy</Text>
        </View>
      </View>

    </ScrollView>

  )
}

export default LoginScreen

const styles = StyleSheet.create({
  input: {
    marginTop: 30,
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 50,
    width: 325,
    borderRadius: 40,
    elevation: 10,
    shadowColor: '#F3D743',
    shadowOpacity: 0.25,
    shadowRadius: 5,
   },
   verticleLine:{
    height: '60%',
    width: 1,
    backgroundColor: '#D9D9D9',
    marginTop:10,
    marginLeft:-15 
   },
  btn: {
    height: 40,
    backgroundColor: "#F3D743",
    width: 325,
    marginLeft: 30,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  socialBtn: {
    height: 40,
    backgroundColor: "#fff",
    width: 325,
    marginLeft: 30,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    elevation: 10,
    shadowColor: '#F3D743',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    fontSize: 14
  },
  left: {
    marginLeft: 50,
    flex: 1,
    height: 1,
    backgroundColor: '#D9D9D9'
  },
  right: {
    marginRight: 50,
    flex: 1,
    height: 1,
    backgroundColor: '#D9D9D9'
  }
})