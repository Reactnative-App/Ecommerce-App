
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from "./FeaturedProduct.style";
import ProductCartView from "./ProductCartView";
import { PRODUCT_LIST } from "../db";

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
];

const FeaturedProduct = () => {
  const products = [1, 2, 3, 4];
  const [activeProdType, setActiveProdType] = useState(1);

  return (
    <View style={styles.tabsContainer}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={item => item.id.toString()} // Convert id to string
        renderItem={({ item }) => {
          const isActive = item.id === activeProdType;
          return (
            <TouchableOpacity
              style={styles.tab(activeProdType, item.id)}
              onPress={() => setActiveProdType(item.id)}>
              <Text style={styles.tabText(activeProdType, item.id)}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={{ columnGap: 12 }}
      />

      <View style={{ marginTop: 20 }}>
        <FlatList
          data={PRODUCT_LIST}
          renderItem={({ item }) => <ProductCartView item = {item} />} // Pass product to ProductCartView
          horizontal={false}
          numColumns={2}
          contentContainerStyle={{ columnGap: 16 }}
        />
      </View>
    </View>
  );
};

export default FeaturedProduct;
