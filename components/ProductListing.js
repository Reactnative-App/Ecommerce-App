import { View, Text, FlatList, Image, StyleSheet  } from 'react-native';
import React, { useEffect, useState } from 'react';

const ProductListing = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = () => {
        const URL = "https://fakestoreapi.com/products";

        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    };

    return (
        <View>
            <Text style={{ color: '#000', margin: 40 }}>ProductListing</Text>
            <FlatList
                data={product}
                renderItem={({ item }) => (
                    <View  style={styles.cardContainer}>
                        <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />
                        <Text style={{color:'#000', fontSize:18, textAlign:"center"}}>
                           {item.price}
                        </Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default ProductListing;

const styles = StyleSheet.create({
 cardContainer: {
backgroundColor:'#fff',
borderRadius:10,
padding:20,
alignItems: 'center',
justifyContent: 'center',
shadowColor:'#000',
shadowOffset:{width:0, height:2},
shadowOpacity:0.2,
shadowRadius:4,
margin:20,

 },
 errorStyle:{
    color:"red",
    fontSize:18,
 }

})