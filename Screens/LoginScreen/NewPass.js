import { StyleSheet,TextInput,Pressable, Text, View } from 'react-native'
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';

const NewPass = ({navigation}) => {
  return (
    <View style={{marginTop:50}}>
      <Icons name='arrow-back-outline' size={24} style={{marginLeft:20}} onPress={()=>navigation.goBack()}/>
<View style={{marginTop:100}}>
  <Text style={{marginLeft:20, fontSize:32}}>Set New Password</Text>
  <Text style={{marginLeft:20, fontSize:14, fontWeight:"300", color:"gray"}}>Set a new password that must be different from the old password</Text>
</View>


   <View style={styles.input}>
       <Icons name="lock-closed-outline" size={25} color="gray" style={{marginRight:5, marginLeft:10,marginTop:8}}/>
      <TextInput placeholder="Password"  />
      <Icons name="eye-outline" size={25} color="gray" style={{marginTop:10, marginLeft:180 }}/>
    </View>
   <View style={styles.input}>
       <Icons name="lock-closed-outline" size={25} color="gray" style={{marginRight:5, marginLeft:10,marginTop:8}}/>
      <TextInput placeholder="Confirm Password"  />
      <Icons name="eye-outline" size={25} color="gray" style={{marginTop:10, marginLeft:130 }}/>
    </View>

    <Pressable style={[styles.btn]} onPress={()=>navigation.navigate('HomeScreen')} >
      <Text style={{color:"#000",textAlign:"center",marginTop:8, fontSize:14}}>Change Password</Text>
    </Pressable>
 </View>
  )
}

export default NewPass

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
        height:40,
        width:325,
        backgroundColor:"#F3D743",
        borderRadius:40,
        alignSelf:"center",
        marginTop:30
      }
})