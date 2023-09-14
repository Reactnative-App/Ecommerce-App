import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from "expo-router";
import styles from "./FeaturedProduct.style";
import ProductCartView from "./ProductCartView";


const productTypes = ["All Product", "Women", "Men", "Bags"];

const FeaturedProduct = () => {

  const products = [1, 2, 3, 4]

  const router = useRouter();
  const [activeProdType, setActiveProdType] = useState("All Product");

  return (
    <View style={styles.tabsContainer}>
      <FlatList
        data={productTypes}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.tab(activeProdType, item)}
            onPress={() => {
              setActiveProdType(item);
              router.push(`/search/${item}`);
            }}
          >
            <Text style={styles.tabText(activeProdType, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: 12 }}
        horizontal
      />


      <View style={{ marginTop: 20 }}>
        <FlatList
          data={products}
          renderItem={({ item }) =><ProductCartView/>}
          horizontal
          contentContainerStyle={{ columnGap: 16 }}
          style={{gap:20}}
        />
      </View>
    </View>
  )
}

export default FeaturedProduct

