import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Pressable, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import Icons from 'react-native-vector-icons/Ionicons';
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckBox from "expo-checkbox";

const LoginScreen = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const [showotp, setshowotp] = useState(true)
  return (

    <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: "#FFFDF6" }}>
      <StatusBar backgroundColor='#F39184' style='light' />

      <ImageBackground source={require('../../assets/Header.png')} style={{ height: 350, marginTop: 25, width: 395 }} imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
        <Icons name='arrow-back-outline' size={20} style={{ marginTop: 30, marginLeft: 30 }} onPress={() => navigation.goBack()} />
      </ImageBackground>
      <Text style={{ fontSize: 32, marginTop: 20, fontWeight: "400", marginLeft: 20 }}>Create Your Account</Text>

      <View style={{ flexDirection: "row", marginTop: 10, }}>
        <View style={{ backgroundColor: "#fff", height: 50, width: 50, marginLeft: 30, borderTopLeftRadius: 20, elevation: 1, borderBottomLeftRadius: 20, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
          <Image source={require('../../assets/Icons/Email.png')} style={{}} />
        </View>
        <TextInput placeholder='Email Address' style={styles.input} />
      </View>
      <View style={{ flexDirection: "row", marginTop: 10, }}>
        <View style={{ backgroundColor: "#fff", height: 50, width: 50, marginLeft: 30, borderTopLeftRadius: 20, elevation: 1, borderBottomLeftRadius: 20, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
          <Image source={require('../../assets/Icons/Call.png')} style={{}} />
        </View>
        <TextInput keyboardType='number-pad' placeholder='Phone Number' style={styles.input} />
      </View>
      <View style={{ flexDirection: "row", marginTop: 10, }}>
        <View style={{ backgroundColor: "#fff", height: 50, width: 50, marginLeft: 30, borderTopLeftRadius: 20, elevation: 1, borderBottomLeftRadius: 20, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
          <Image source={require('../../assets/Icons/Lock.png')} style={{}} />

        </View>
        <TextInput placeholder=' Password' secureTextEntry={showotp} style={styles.input} />
        <View style={{ marginTop: 10 }}>
          <Pressable onPress={() => { setshowotp(!showotp) }}>
            <View style={{ padding: 5, marginLeft: -40 }}>
              {showotp ?
                <Ionicons name="ios-eye-off-outline" size={20} color="#000" />
                :
                <Ionicons name="ios-eye-outline" size={20} color="#000" />
              }</View>
          </Pressable>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 30, justifyContent: "space-around" }}>
        <CheckBox style={styles.check}
          value={isSelected}
          onValueChange={setSelection}
          color={isSelected ? "#EED443" : ""}
        />
        <Text style={{ marginLeft: 10, }}>I agree with <Text style={{ color: "#EED443" }}>Terms of Service & Privacy Policy</Text></Text>
      </View>

      <View style={{ flexDirection: "row", width: "90%", justifyContent: "space-around", marginTop: 10 }}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "#fff", elevation:10, shadowColor: '#F3D743',shadowOpacity: 0.25, shadowRadius: 5 }]} onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={{ color: "#000", textAlign: "center", fontSize: 14 }}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("CreateProfile")}>
          <Text style={{ color: "#000", textAlign: "center", fontSize: 14 }}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginLeft: 20, marginTop: 30 }}>
        <Text style={{ fontSize: 12, textAlign: 'center', color: "#737171" }}>By creating an account or logging in, you agree With Overay<Text style={{ height: 10, width: 10 }}></Text></Text>

        <View style={{ flexDirection: "row", marginLeft: 60 }}>
          <Text style={{ fontSize: 12, fontWeight: "600", color: "#737171" }}>Terms & Conditions</Text>
          <Text style={{ fontSize: 12, textAlign: "center" }}> and</Text>
          <Text style={{ fontSize: 12, fontWeight: "600", color: "#737171" }}> Privacy Policy</Text>
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
    elevation: 10,
    shadowColor: '#F3D743',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  btn: {
    height: 40,
    backgroundColor: "#F3D743",
    width: 155,
    marginLeft: 30,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
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
  check: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderColor: "#737171",
    borderWidth: 1

  }
})