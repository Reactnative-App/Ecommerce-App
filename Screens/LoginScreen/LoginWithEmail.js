import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Pressable, ScrollView} from 'react-native'
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import Icons from 'react-native-vector-icons/Ionicons';
import Ionicons from "react-native-vector-icons/Ionicons";


const LoginScreen = ({ navigation }) => {
  const [showotp, setshowotp] = useState(true)
  return (

    <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: "#FFFDF6" }}>
      <StatusBar backgroundColor='#F39184' style='light' />

      <Image source={require('../../assets/Header.png')} style={{ height: 330, marginTop: 10, width: 360, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} />
      <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "400", marginLeft: 20 }}>Welcome Back</Text>

      <View style={{ flexDirection: "row", marginTop: 10, }}>
        <View style={{ backgroundColor: "#fff", height: 50, width: 50, marginLeft: 30, borderTopLeftRadius: 20, elevation: 1, borderBottomLeftRadius: 20, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
          <Icons name="mail-outline" size={20} />
        </View>
        <TextInput placeholder='Email Address' style={styles.input} />
      </View>
      <View style={{ flexDirection: "row", marginTop: 10, }}>
        <View style={{ backgroundColor: "#fff", height: 50, width: 50, marginLeft: 30, borderTopLeftRadius: 20, elevation: 1, borderBottomLeftRadius: 20, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
          <Icons name="lock-closed-outline" size={20} />

        </View>
        <TextInput placeholder=' Password' secureTextEntry={showotp} style={styles.input} />
        <View style={{ marginTop: 10, marginRight: 100 }}>

        


       
     <Pressable onPress={() => { setshowotp(!showotp) } }>
  <View style={{padding:5}}>
  {showotp ? 
  <Ionicons  name="ios-eye-off-outline" size={20} color="#000" /> 
          : 
  <Ionicons  name="ios-eye-outline" size={20} color="#000" />
  }</View>
</Pressable>
        </View>
      </View>

      <Text style={{ alignSelf: "flex-end", marginTop: 10, marginRight: 20, fontWeight: "600", color: "#EED443" }}>Forgot Password</Text>

      <View style={{ flexDirection: "row", width: "90%", justifyContent: "space-around" }}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "#fff" }]} onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={{ color: "#000", textAlign: "center", fontSize: 14 }}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: "#000", textAlign: "center", fontSize: 14 }}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24 }}>
        <View style={styles.left} />
        <View>
          <Text style={{ width: 100, textAlign: 'center', color: '#D9D9D9', }}>Or Sign In With</Text>
        </View>
        <View style={styles.right} />
      </View>

      <View style={{ elevation: 1 }}>

        <Pressable style={styles.socialBtn}>
          <Image source={require('../../assets/google.png')} style={{ height: 20, width: 20, marginRight: 20 }} />
          <Text>Sign In With Google</Text>
        </Pressable>

      </View>

      <View style={{ marginLeft: 20, marginTop: 4 }}>
        <Text style={{ fontSize: 12 }}>By creating an account or logging in, you agree With Overay</Text>
        <View style={{ flexDirection: "row", marginLeft: 60 }}>
          <Text style={{ fontSize: 12, fontWeight: "600", color: "#737171", alignSelf: "center" }}>Terms & Conditions</Text>
          <Text style={{ fontSize: 12, alignSelf: "center" }}> and</Text>
          <Text style={{ fontSize: 12, fontWeight: "600", alignSelf: "center", color: "#737171" }}> Privacy Policy</Text>
        </View>
      </View>

    </ScrollView>

  )
}

export default LoginScreen

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: "70%",
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 1
  },
  btn: {
    height: 40,
    backgroundColor: "#F3D743",
    width: 155,
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