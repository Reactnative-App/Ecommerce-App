import { View, Text,Image, TouchableOpacity,FlatList, ScrollView,SafeAreaView } from "react-native";
import React from "react";
import ProductCartView from "../../components/ProductCartView";
import styles from "./Cart.style";
import { scaleFont, scaleSize } from "../../Constants/Mixins";
import PRODUCT_1 from "../../assets/Products/Product1.png";
import PRODUCT_2 from "../../assets/Products/Product2.png";
import PRODUCT_3 from "../../assets/Products/Product3.png";
import { COLORS, SIZES } from "../../Constants/theme";
import { StatusBar } from "expo-status-bar";

const Cart = ({ navigation }) => {
  const products = [1, 2, 3, 4]
  const data = [
    {
      image: PRODUCT_1,
      title: "Fashion",
      item_name: "T-shirt cotton printed",
      qty: 1,
      price: "$40",
    },
    {
      image: PRODUCT_2,
      title: "Fashion",
      item_name: "Linen slim-fit t-shirt",
      qty: 1,
      price: "$40",
    },
    {
      image: PRODUCT_3,
      title: "Fashion",
      item_name: "T-shirt cotton printed",
      qty: 1,
      price: "$40",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          marginHorizontal: scaleSize(25),
          marginTop: scaleSize(30),
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Image
          source={item.image}
          style={{
            height: scaleSize(55),
            width: scaleSize(55),
            borderRadius: scaleSize(10),
          }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            marginLeft: scaleSize(10),
          }}
        >
          <Text
            style={{
              color: "#BDBDBD",
              fontFamily: "regular",
              fontSize: scaleFont(10),
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              color: "#0F0F0F",
              fontFamily: "regular",
              fontSize: scaleFont(15),
              marginVertical: scaleSize(5),
            }}
          >
            {item.item_name}
          </Text>
          <Text
            style={{
              color: "#0F0F0F",
              fontFamily: "bold",
              fontSize: scaleFont(15),
            }}
          >
            {item.price}
          </Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text>{item.qty}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
    <StatusBar style="dark" backgroundColor={COLORS.white} />
    <ScrollView>
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

      {/* <View style={{ marginTop: scaleSize(20),marginHorizontal:scaleSize(20)}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        />
      </View> */}
      <View style={{ marginBottom: scaleSize(120)}}>

      <View
          style={{
            backgroundColor: "#FFF8DD",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            flex: 1,
            // padding: scaleSize(20),
            marginTop: scaleSize(20),
            marginBottom: scaleSize(10),
          }}
        >
          <Text
            style={{
              marginHorizontal: scaleSize(25),
              marginVertical: scaleSize(20),
            }}
          >
            Voucher
          </Text>
          <View
            style={{
              backgroundColor: COLORS.white,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              paddingHorizontal: scaleSize(25),
              //   flex: 1,
              //   padding: scaleSize(0),
              //   marginTop: scaleSize(40),
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                marginTop: scaleSize(20),
              }}
            >
              <Text
                style={{
                  color: "#0F0F0F",
                  fontFamily: "regular",
                  fontSize: scaleFont(15),
                }}
              >
                Subtotal:
              </Text>
              <Text
                style={{
                  color: "#0F0F0F",
                  fontFamily: "bold",
                  fontSize: scaleFont(15),
                }}
              >
                $120.00
              </Text>
            </View>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                marginTop: scaleSize(20),
              }}
            >
              <Text
                style={{
                  color: "#0F0F0F",
                  fontFamily: "regular",
                  fontSize: scaleFont(15),
                }}
              >
                Shipping:
              </Text>
              <Text
                style={{
                  color: "#0F0F0F",
                  fontFamily: "bold",
                  fontSize: scaleFont(15),
                }}
              >
                $120.00
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#E4E4E4",
                height: 1,
                // marginHorizontal: scaleSize(25),
                marginTop: scaleSize(30),
              }}
            />

            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                marginTop: scaleSize(20),
              }}
            >
              <Text
                style={{
                  color: "#0F0F0F",
                  fontFamily: "bold",
                  fontSize: scaleFont(15),
                }}
              >
                Total (3 items):
              </Text>
              <Text
                style={{
                  color: "#F3D743",
                  fontFamily: "bold",
                  fontSize: scaleFont(15),
                }}
              >
                $120.00
              </Text>
            </View>

            <TouchableOpacity
              style={{
                // marginHorizontal: scaleSize(25),
                marginTop: scaleSize(40),
                backgroundColor: "#F3D743",
                padding: scaleSize(15),
                alignItems: "center",
                borderRadius: scaleSize(30),
              }}
            >
              <Text
                style={{
                  color: "#0F0F0F",
                  fontFamily: "regular",
                  fontSize: scaleFont(16),
                }}
              >
                Proceed To Ckeckout
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
