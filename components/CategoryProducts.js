import {Image, FlatList, StyleSheet, Text,Pressable,ImageBackground, ToastAndroid, TouchableOpacity, View, Dimensions } from 'react-native'
import React, {useCallback, useState} from 'react'
import { StatusBar } from 'expo-status-bar'

import { useFocusEffect, useNavigation } from '@react-navigation/native';



const CategoryProducts = () => {

  const navigation = useNavigation();
  const [visible, setVisible] = useState(false)
  const [products, setProducts] = useState([])


  
  // useFocusEffect(
  //   useCallback(() => {
  //    // getProducts()
  //   }, [])
  // );
 
  

  // async function getProducts(){
  //   try {
  //     setVisible(true)
  //     const data = await fetch('http://192.168.29.189:4000/api/getAllProducts');
  //     const res = await data.json();
  //     console.log("Products",res.data);
  //     await setProducts(res.data)
     
  //     setVisible(false)
      
  //   } catch (e) {
  //     console.log(e)
  //     setVisible(false)
  //   }
  // }

  const displayProducts = ({item}) =>{
    return(
     
      <Pressable style={styles.prodItem} onPress={()=>navigation.navigate("DetailsScreen",{
        id:item.id,
        name:item.name,
        price:item.price,
        desc: item.desc,
        dPrice:item.dPrice,
        image:item.image
      })}>
        
      <ImageBackground imageStyle={{borderRadius:6}} style={{aspectRatio:5/6, height:150}} source={{uri:item.image}}/>
      
      <Text style={{marginTop:10, fontWeight:500, fontSize:15}}>{item.name}</Text>
      <View style={{flexDirection:"row", justifyContent:"space-around"}}>
      <Text style={{color:"#1C5757",textDecorationLine:"line-through", fontSize:16}}>₹{item.price}</Text>
      <Text style={{color:"gray", fontSize:14}}>₹{item.dPrice}</Text>
      </View>
     
      <Text style={{marginTop:5,color:"gray", fontSize:14}}>{item.desc.substr(0,20)+"..."}</Text>

 
    </Pressable>
      //   <View style={styles.prodItem} onPress={()=>ToastAndroid.show("Product Lele Bhai",ToastAndroid.SHORT)}>
      //   <View style={styles.cardView}>
      //   <Image style={{height:50, width:50, borderRadius:10}} source={require('../assets/images/me.jpg')}
      //    resizeMode='contain'
      //   />
      //   <View style={{marginLeft:10}}>
      //     <Text>{item.name}</Text>
      //     <Text>{item.desc}</Text>
      //   </View> 
      //   </View>
      // </View>
  
      
    )
  }
  
  return (
    <View style={styles.container}>
       <StatusBar  style='dark'/>
       
        <FlatList
        data={products}
        renderItem={displayProducts}
        //onRefresh={()=>getProducts()}
        //refreshing={visible}
        horizontal={false}
        numColumns={2}
       />
       
    



        </View>
       )
       }
       
        
    

export default CategoryProducts

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
prodItem:{
  backgroundColor:"#e9edf2",
  width:"50%",
  marginTop:5,
  marginLeft:5,
  padding:10,
  marginBottom:10
  },
  myCard:{
    margin:5,
    width:100,
    height:undefined,
    marginTop:10,
    flexDirection:"row"
  },
  cardView:{
    padding:6
  },
  
})