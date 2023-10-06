import { View, Text,Image, TouchableOpacity,FlatList } from "react-native";
import React from "react";
import ProductCartView from "../../components/ProductCartView";
import styles from "./Cart.style";

const Cart = ({ navigation }) => {
  const products = [1, 2, 3, 4]
  return (
    <View style={styles.main}>
      <View style={styles.cartHeader}>
        <TouchableOpacity>
          <Image source={require('../../assets/Icons/Arrow.png')} onPress={() => navigation.goBack()} />
        </TouchableOpacity>
        <Text style={styles.centerTxt}>
          Cart
        </Text>
        <Image source={require('../../assets/Icons/searchIcon.png')} />
      </View>
      <View style={styles.emptyContainer}>
        <Image source={require('../../assets/Icons/cartemty.png')} />
        <Text style={styles.emtyTxt}>
          Your Cart Is Empty
        </Text>
      </View>
      <View>
         <Text style={styles.sdHeading}>You May Also Like</Text>
      </View>
      <View style={{ marginTop: 20,marginHorizontal:26 }}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCartView />}
          horizontal={false}
          numColumns={2}
          contentContainerStyle={{ columnGap: 16}}
        />
      </View>
    </View>
  );
};

export default Cart;
