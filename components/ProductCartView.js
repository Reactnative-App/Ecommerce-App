import {View,TouchableOpacity,Image,Text} from 'react-native';
import React from 'react';
import styles from './ProductCartView.style';
import { useNavigation } from '@react-navigation/native';

 const ProductCartView = () =>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
        <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image 
        source={require('../assets/Products/Product1.png')}
        resizeMode='contain'
         />
        </View>

        <View style={styles.details}>
            <Text style={styles.title} numberOflines={1}>
            Fashion
            </Text>
            <Text style={styles.supplier} numberOflines={1}>
            Linen slim-fit t-shirt
            </Text>
            <Text style={styles.price}>$2536</Text>
        </View>

        <TouchableOpacity >
        <Image source={require('../assets/Icons/addButton.png')} style={styles.addBtn}/>
        </TouchableOpacity>
     
        </View>
        </TouchableOpacity>
    )
}          

export default ProductCartView
