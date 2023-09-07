import { ScrollView, StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'

const FoodTypes = () => {
    const type= [
        {
            id:"0",
            image:require('../assets/categories/1.png'),
            name:"T-Shirt",
        },
        {
            id:"1",
            image:require('../assets/categories/2.png'),
            name:"TrackSuit"
        },
        {
            id:"2",
            image:require('../assets/categories/3.png'),
            name:"Boxer"
        },
        {
            id:"3",
            image:require('../assets/categories/4.png'),
            name:"Lowers",
    
        },
        
    ]
  return (
    <View>
     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         {type.map((item, index)=>{
           return( <View style={{margin:14}} key={index}>
            <Image source={item.image} style={{height:60, width:60 , borderRadius:25}}/>
                <Text style={{marginTop:6, textAlign:"center"}}>{item.name}</Text>
            </View>)
         })}
     </ScrollView>
    </View>
  )
}

export default FoodTypes

const styles = StyleSheet.create({})