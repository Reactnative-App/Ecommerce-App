import { StyleSheet, Image,Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Icons from 'react-native-vector-icons/Ionicons';
import QuickFood from '../components/QuickFood';
import CategoryProducts from '../components/CategoryProducts';

const HomeScreen = () => {
  return (
    <View>
        <StatusBar style='dark'/>
     <View style={{marginTop:50, marginLeft:10}}>
       <View style={{flexDirection:"row",justifyContent:"space-between", marginEnd:10 }}>
          <Image source={require('../assets/main_logo.png')} style={{height:36, width:36}}/>
          <View style={{flexDirection:"row", margin:10}}>
            <Icons name="search" size={18} />
            <Icons name="notifications-outline" size={18} style={{marginLeft:10}}/>
          </View>
       </View>

       <QuickFood/>

       <View>
        <Image source={require('../assets/Hero_Banner.png')} style={{height:270, width:325, alignSelf:"center"}} resizeMode='contain'/>
       </View>

       <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:10}}>
        <TouchableOpacity style={styles.tbtn}>
            <Text>New Arrival</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tbtn}>
            <Text>Best Seller</Text>
        </TouchableOpacity>
       </View>

       <CategoryProducts/>
     </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    tbtn:{
        backgroundColor:"#e9edf2",
        padding:10,
        width:100,
        borderRadius:50
    }
})