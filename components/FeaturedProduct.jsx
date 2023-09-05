import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from "expo-router";
import styles from "./FeaturedProduct.style";


const productTypes = ["All Product", "Women", "Men", "Bags"];

const FeaturedProduct = () => {

  const products = [1, 2, 3, 4]

  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("All Product");

  return (
    <View style={styles.tabsContainer}>
      <FlatList
        data={productTypes}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.tab(activeJobType, item)}
            onPress={() => {
              setActiveJobType(item);
              router.push(`/search/${item}`);
            }}
          >
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: 12 }}
        horizontal
      />

      <View style={{ marginTop: 16 }}>
        <FlatList
          data={products}
          renderItem={({ item }) => <Text>Product</Text>}
          horizontal
          contentContainerStyle={{ columnGap: 16 }}
        />
      </View>
    </View>
  )
}

export default FeaturedProduct

