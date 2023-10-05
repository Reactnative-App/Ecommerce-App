import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import ProductCartView from "../../components/ProductCartView";
import styles from "../../Screens/OnboardingScreens/Cart.style";

const Cart = ({ navigation }) => {
  return (
    <View>
      <View style={styles.cartHeader}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/Icons/Arrow.png")}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.centerTxt}>CART</Text>
        <Image source={require("../../assets/Icons/searchIcon.png")} />
      </View>
      <View>
        <View style={{ backgroundColor: "#FCF8E2" }}>
          <Image
            source={require("../../assets/Content.png")}
            style={{ height: 270, width: 325, alignSelf: "center" }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View>
        <Text style={styles.likeTxt}>You May Also Like</Text>

        <ProductCartView />
      </View>
    </View>
  );
};

export default Cart;
