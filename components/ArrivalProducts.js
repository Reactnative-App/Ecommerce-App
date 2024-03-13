import { Text, View, FlatList } from 'react-native'
import React from 'react'
import ProductCartView from "./ProductCartView";
import { PRODUCT_LIST } from '../db';

const ArrivalProducts = () => {
    const products = [1, 2, 3, 4]
  return (
    <View style={{ marginTop: 25 }}>
    <FlatList
      data={PRODUCT_LIST}
      renderItem={({ item }) => <ProductCartView />}
       horizontal={false}
      numColumns={2}
      contentContainerStyle={{ columnGap: 16}}
    />
  </View>
  )
}

export default ArrivalProducts

