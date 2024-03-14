import { ScrollView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



const CategoriesTypes = () => {
    const navigation = useNavigation();
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
           return( <TouchableOpacity onPress={() => navigation.navigate("MenScreen",{type:item.name})} style={{marginHorizontal:2}} key={index}>
            <Image source={item.image} />
                <Text style={{textAlign:"center",fontSize:10,fontFamily:'regular', color:'#000'}}>{item.name}</Text>
            </TouchableOpacity>)
         })}
     </ScrollView>
    </View>
  )
}

export default CategoriesTypes

const styles = StyleSheet.create({})