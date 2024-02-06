import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable,FlatList, StatusBar } from 'react-native';
import React from 'react';
import styles from './MenScreen.style';
import ProductCartView from "./ProductCartView";
import { scaleSize } from '../Constants/Mixins';

const MenScreen = () => {
  const products = [1, 2, 3, 4]
  return (
    <View style={styles.container}>
       <StatusBar
          barStyle={'light-content'}
          translucent
          backgroundColor="transparent"
        />
      <View style={styles.upperRow}>
        <TouchableOpacity>
          <Image source={require('../assets/Icons/ArrowWht.png')} onPress={() => navigation.goBack()} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ flexDirection: 'row', gap: 20, display: "flex" }}>
            <Image source={require('../assets/Icons/Search1.png')} />
            <Image source={require('../assets/Icons/Notify.png')} />

          </View>
        </TouchableOpacity>
      </View>
      <Image source={require('../assets/MenFashion.png')} style={styles.image} />
      <View style={styles.btnSection}>
        <Pressable style={styles.btnFilter} onPress={() => { }} >
          <Text style={styles.btnText}>
            <Image source={require("../assets/Icons/Filter.png")} /> &nbsp; Filter</Text>
        </Pressable>
        <Pressable style={styles.btnSort} onPress={() => { }}  >
          <Text style={styles.btnText}>Sort By &nbsp;
            <Image source={require("../assets/Icons/sortBy.png")}  /></Text>
        </Pressable>

      </View>
      <View style={{ marginTop:scaleSize( 20) ,marginHorizontal:scaleSize(10) }}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCartView />}
          horizontal={false}
          numColumns={2}
          contentContainerStyle={{ columnGap: 16}}
        />
      </View>
    </View>
  )
}

export default MenScreen