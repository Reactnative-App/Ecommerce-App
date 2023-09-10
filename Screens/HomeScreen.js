import { StyleSheet, Image,Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Icons from 'react-native-vector-icons/Ionicons';
import QuickFood from '../components/QuickFood';
import CategoryProducts from '../components/CategoryProducts';
import FeaturedProduct from '../components/FeaturedProduct';
import ProductCartView from '../components/ProductCartView';
import ArrivalProducts from '../components/ArrivalProducts';
import { ScrollView } from 'react-native-virtualized-view';


const HomeScreen = () => {
  return (
    <>
    {/* <StatusBar style='dark'/> */}
    <ScrollView>
      
     <View style={{marginTop:40, marginLeft:10}} >
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
       <View style={{height:4,width:120, backgroundColor:"orange", marginTop:4,marginStart:"3%", alignSelf:"flex-start"}}/>

     <ArrivalProducts/>

       <View style={{ marginTop: 16 }}>
          <Text style={styles.txt}>Featured Product</Text>
        </View>

        <FeaturedProduct />

       <CategoryProducts/>
       {/* <ProductCartView/> */}
      <TouchableOpacity style={styles.btn}>
         <Text style={{color:"#fff"}}>View All Categories</Text>
      </TouchableOpacity>

       <View>
        <Image source={require('../assets/Home_Banner.png')} style={{height:300, width:300, alignSelf:"center"}} resizeMode='contain'/>
       </View>
  

     <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
       <View>
        <Text>CASH ON DELIVERY</Text>
       </View>
       <View style={styles.verticalLine}/>
       <View>
        <Text>15 DAYS EASY RETURNS</Text>
       </View>
       <View style={styles.verticalLine}/>
       <View>
        <Text>EXPRESS SHIPPING</Text>
       </View>
     
     </View>
       
     </View>
    </ScrollView>
    </>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    tbtn:{
        backgroundColor:"#FFFF",
        padding:10,
        width:100,
        borderRadius:50
    },
    txt:{
      fontSize:24,
      fontFamily:"regular"
    },
    centerTxt: {
      marginTop:10,
      fontSize: 16,
      fontFamily: 'regular',
      paddingVertical: 16 / 2,
      paddingHorizontal: 16,
      borderRadius: 16,
      backgroundColor: '#000',
      color: '#ffffff',
      justifyContent:"center",
      alignItems:"center"   
  },
  btn:{
    backgroundColor:"#000",
      height:40,
      width:325,
      marginTop:20,
      alignSelf:'center',
      borderRadius:25,
      justifyContent:"center",
      alignItems:"center"
  },
  verticalLine:{
    width:1,
    height:'100%',
    color:"black"
  }

  
})