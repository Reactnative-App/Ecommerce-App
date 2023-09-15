import { ScrollView, StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'

const CategoriesTypes = () => {
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
    <View style={{marginTop:10}}>
     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         {type.map((item, index)=>{
           return( <View style={{marginHorizontal:2}} key={index}>
            <Image source={item.image} />
                <Text style={{textAlign:"center",fontSize:10,fontFamily:'regular'}}>{item.name}</Text>
            </View>)
         })}
     </ScrollView>
    </View>
  )
}

export default CategoriesTypes

const styles = StyleSheet.create({})