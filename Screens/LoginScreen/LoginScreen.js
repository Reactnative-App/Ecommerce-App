import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import Icons from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({ navigation }) => {
  return (

    <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: "#FFFDF6" }}>
      <StatusBar backgroundColor='#F39184' style='light' />

      <Image source={require('../../assets/Header.png')} style={{ height: 330, marginTop: 10, width: 360, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} />
      <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "400", marginLeft: 20 }}>Welcome Back</Text>

      <View style={{ flexDirection: "row", marginTop: 10, }}>
        <View style={{ backgroundColor: "#fff", height: 50, width: 50, marginLeft: 30, borderTopLeftRadius: 20, elevation: 1, borderBottomLeftRadius: 20, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
          <Icons name="call-outline" size={18} style={{ marginLeft: 5 }} />
          <Text style={{ color: "gray", marginLeft: 5 }}>+91</Text>
        </View>
        <TextInput placeholder=' Phone Number' style={styles.input} keyboardType='number-pad' />
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "#000", textAlign: "center", fontSize: 14 }}>Continue With OTP</Text>
      </TouchableOpacity>
      
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop:24}}>
      <View style={styles.left} />
     <View>
      <Text style={{width: 100, textAlign: 'center', color: '#D9D9D9',}}>Or Sign In With</Text>
    </View>
      <View style={styles.right}  />
      </View>

      <View style={{ elevation: 1 }}>
        <Pressable style={styles.socialBtn} onPress={() => { navigation.navigate('LoginWithEmail') }}>
          <Image source={require('../../assets/Icons/Mail.png')} style={{ marginTop: 6, marginRight: 10, marginLeft: 10 }} />
          {/* <Icons name="mail-outline" size={20} style={{marginRight:20}} /> */}
          <Text style={{ textAlign: "center" }}>Continue With Email</Text>
        </Pressable >
        <Pressable style={styles.socialBtn}>
          <Image source={require('../../assets/google.png')} style={{ height: 20, width: 20, marginRight: 20 }} />
          <Text>Sign In With Google</Text>
        </Pressable>
        <Pressable style={styles.socialBtn}>
          <Image source={require('../../assets/facebook.png')} style={{ height: 20, width: 20, marginRight: 20 }} />
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
    height: 50,
    width: 250,
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 1,
    textAlign: "left"
  },
  btn: {
    height: 40,
    backgroundColor: "#F3D743",
    width: 300,
    marginLeft: 30,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  socialBtn: {
    padding: 15,
    backgroundColor: "#fff",
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
   },
   left:{
    marginLeft:50,
    flex:1,
    height:1,
    backgroundColor:'#D9D9D9'
   },
   right:{
    marginRight:50,
    flex:1,
    height:1,
    backgroundColor:'#D9D9D9'
   }
})