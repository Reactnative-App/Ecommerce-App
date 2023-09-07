import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from "expo-router";
import styles from "./FeaturedProduct.style";
import ProductCartView from "./ProductCartView";

export const categories = [
  {
    id: 1,
    title: "All Product",
  },
  {
    id: 2,
    title: "Men",
  },
  {
    id: 3,
    title: "Women",
  },
  {
    id: 4,
    title: "TrackPants",
  },
  {
    id: 5,
    title: "Bags",
  },
]

const FeaturedProduct = () => {

  const products = [1, 2, 3, 4]

  const router = useRouter();
  const [activeProdType, setActiveProdType] = useState("All Product");

  return (
    <View style={styles.tabsContainer}>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          isActive = item.id == activeProdType;
          // let activeTextClass = isActive ? COLORS.main : COLORS.white;
          return (
            <TouchableOpacity style={styles.tab(activeProdType, item.id)}
              onPress={() => setActiveProdType(item.id)}>
              <Text style={styles.tabText}>{item.title}</Text>
            </TouchableOpacity>
          )
        }}
        contentContainerStyle={{ columnGap: 12 }}
      />


      <View style={{ marginTop: 16 }}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCartView />}
          horizontal
          contentContainerStyle={{ columnGap: 16 }}
        />
      </View>
    </View>
  )
}

export default FeaturedProduct

