import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,StatusBar
} from "react-native";
import React from "react";
// import { StatusBar } from "expo-status-bar";
import { COLORS } from "../Constants/theme";
import { FlatList } from "react-native";
import { scaleFont, scaleSize } from "../Constants/Mixins";
import ARROW_SVG from "../assets/svg/Arrow.svg";
import PRODUCT_1 from "../assets/Products/Product1.png";
import PRODUCT_2 from "../assets/Products/Product2.png";
import PRODUCT_3 from "../assets/Products/Product3.png";
import PRODUCT_4 from "../assets/Products/Product4.png";
import MAP from "../assets/Map.png";
import NAVI_ARRW_SVG from "../assets/svg/navigateArrw.svg";
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
export default function Checkout() {
  const ListHeaderItem = () => {
    return (
      <View style={{ marginTop: scaleSize(30) }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: scaleSize(30),
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ARROW_SVG
            height={scaleSize(20)}
            width={scaleSize(20)}
            style={{ marginLeft: scaleSize(20) }}
            onPress={() => navigation.goBack()}
          />
          <View
            style={{
              flex: 1,
              alignItems: "center",
              marginRight: scaleSize(50),
            }}
          >
            <View
              style={{
                backgroundColor: "#0F0F0F",
                paddingHorizontal: scaleSize(20),
                paddingVertical: scaleSize(5),
                borderRadius: 15,
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontFamily: "regular",
                  fontSize: scaleFont(15),
                }}
              >
                ADD A REVIEW
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: scaleSize(25),
            marginTop: scaleSize(30),
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            source={MAP}
            style={{
              height: scaleSize(75),
              width: scaleSize(75),
              borderColor: "#F3D743",
              borderWidth: 1,
              borderRadius: scaleSize(10),
            }}
          />
          <View style={{ flex: 1, marginLeft: scaleSize(15) }}>
            <Text
              style={{
                color: "#F3D743",
                fontFamily: "regular",
                fontSize: scaleFont(15),
              }}
            >
              My Home
            </Text>
            <Text
              style={{
                color: "#717171",
                fontFamily: "regular",
                fontSize: scaleFont(11),
                marginTop: scaleSize(10),
              }}
            >
              4517 Washington Ave. Manchester, Kentucky 39495
            </Text>
            <Text
              style={{
                color: "#717171",
                fontFamily: "regular",
                fontSize: scaleFont(11),
                marginTop: scaleSize(10),
              }}
            >
              (208) 555-0112
            </Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <NAVI_ARRW_SVG height={scaleSize(16)} width={scaleSize(16)} />
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#E4E4E4",
            height: 1,
            marginHorizontal: scaleSize(25),
            marginTop: scaleSize(30),
          }}
        />
      </View>
    );
  };
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
  const ListFooterComponent = () => {
    return (
      <View>
        <View
          style={{
            backgroundColor: "#E4E4E4",
            height: 1,
            marginHorizontal: scaleSize(25),
            marginTop: scaleSize(30),
          }}
        />
        <View
          style={{
            marginTop: scaleSize(20),
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: scaleSize(25),
          }}
        >
          <Text>MASTER CARD</Text>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <NAVI_ARRW_SVG height={scaleSize(16)} width={scaleSize(16)} />
          </View>
        </View>

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
                  fontFamily: "reguler",
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
                  fontFamily: "reguler",
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
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                marginTop: scaleSize(20),
              }}
            >
              <Text
                style={{
                  color: "#0F0F0F",
                  fontFamily: "reguler",
                  fontSize: scaleFont(15),
                }}
              >
                Voucher:
              </Text>
              <Text
                style={{
                  color: "#EB001B",
                  fontFamily: "bold",
                  fontSize: scaleFont(15),
                }}
              >
                -$120.00
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
                Order Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        ListHeaderComponent={ListHeaderItem}
        ListFooterComponent={ListFooterComponent}
      />
    </SafeAreaView>
  );
}
