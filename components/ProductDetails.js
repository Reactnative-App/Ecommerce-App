import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./ProductDetails.style";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { WIDTH, scaleFont, scaleSize } from "../Constants/Mixins";
import INFO_SVG from "../assets/svg/Info.svg";
import NAVIGATIONARROW_SVG from "../assets/svg/navigateArrw.svg";
import CHAT_SVG from "../assets/svg/Chat.svg";
import STAR_SVG from "../assets/svg/Star.svg";
import { COLORS } from "../Constants/theme";
import * as Progress from "react-native-progress";

const ProductDetails = ({ navigation }) => {
  const SIZES = ["S", "M", "L", "XL"];

  const [size, setSize] = useState(SIZES[0]);
  const [count, setCount] = useState(1);

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.wishListHeader}>
          <TouchableOpacity>
            <Image
              source={require("../assets/Icons/Arrow.png")}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", gap: 20, display: "flex" }}>
              <Image source={require("../assets/Icons/searchIcon.png")} />
              <Image source={require("../assets/Icons/Cart.png")} />
              <Image source={require("../assets/Icons/Wishlist.png")} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.titleRow}>
          <View style={styles.miniHead}>
            <Text style={styles.title}>Fashion</Text>
            <Ionicons name="star" size={12} color="gold" />
            <Text>4.9</Text>
            <Text>(10 Reviews)</Text>
          </View>
          <View></View>
        </View>

        <View style={styles.details}>
          <View style={styles.ratingRow}>
            <View style={styles.rating}>
              <Text style={styles.txt}>Linen slim-fit t-shirt</Text>
            </View>

            <View style={styles.rating}>
              <TouchableOpacity
                onPress={() => {
                  if (count > 1) {
                    setCount(count - 1);
                  }
                }}
              >
                <SimpleLineIcons name="minus" size={20} />
              </TouchableOpacity>
              <Text>{count}</Text>
              <TouchableOpacity
                onPress={() => {
                  setCount(count + 1);
                }}
              >
                <SimpleLineIcons name="plus" size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={styles.price}>$40.00</Text>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.descTxt}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eaque,
            nemo corporis voluptate quas alias sunt molestiae dolores deserunt
            molestias quia velit possimus autem? Aliquid numquam atque unde
            officiis porro.r
          </Text>
        </View>

        <View style={styles.sizeTop}>
          <View style={styles.sizeDirection}>
            <Text style={styles.customSizes}>Color :</Text>
          </View>

          <View style={styles.sizesRow}>
            {SIZES.map((s, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => setSize(s)}
                style={{
                  width: 24,
                  height: 24,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  backgroundColor: "#000",
                  borderRadius: 44,
                }}
              ></TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.sizeTop}>
          <View style={styles.sizeDirection}>
            <Text style={styles.customSizes}>Size :</Text>
          </View>

          <View style={styles.sizesRow}>
            {SIZES.map((s, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => setSize(s)}
                style={{
                  width: 24,
                  height: 24,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: s === size ? "#bdbdbd" : "",
                  borderRadius: 44,
                }}
              >
                <Text
                  style={{
                    color: s === size ? "#000" : "#bdbdbd",
                    fontFamily: "regular",
                    fontSize: 10,
                  }}
                >
                  {s}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.horizontal}></View>

          <View style={styles.descTab}>
            <INFO_SVG size={scaleSize(20)} />

            <View style={styles.textContainer}>
              <Text style={styles.descTxt}>Description</Text>
            </View>

            <TouchableOpacity>
              <NAVIGATIONARROW_SVG
                size={scaleSize(20)}
                style={{ marginTop: scaleSize(5) }}
                onPress={() => {
                  navigation.navigate("Description");
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.horizontal}></View>

          <View style={styles.descTab}>
            <CHAT_SVG size={scaleSize(20)} />

            <View style={styles.textContainer}>
              <Text style={styles.descTxt}>Reviews</Text>
            </View>

            <TouchableOpacity>
              <NAVIGATIONARROW_SVG
                size={scaleSize(20)}
                style={{ marginTop: scaleSize(5) }}
                onPress={() => {
                  navigation.navigate("Reviews");
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: COLORS.white,
              marginHorizontal: scaleSize(20),
              padding: scaleSize(20),
              elevation: 1,
              marginTop: scaleSize(30),
              borderRadius: 10,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                marginBottom: scaleSize(20),
              }}
            >
              <Text
                style={{
                  color: COLORS.black_light,
                  fontFamily: "regular",
                  fontSize: scaleFont(60),
                }}
              >
                4.9
                <Text
                  style={{
                    color: "#BDBDBD",
                    fontFamily: "regular",
                    fontSize: scaleFont(20),
                  }}
                >
                  /5
                </Text>
              </Text>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                  <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                  <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                  <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                  <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                </View>
                <Text
                  style={{
                    color: "#BDBDBD",
                    fontFamily: "regular",
                    fontSize: scaleFont(10),
                  }}
                >
                  Based On 10 Reviews
                </Text>
              </View>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                <Text
                  style={{
                    color: "#717171",
                    fontFamily: "regular",
                    fontSize: scaleFont(14),
                  }}
                >
                  5
                </Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Progress.Bar
                  progress={0.5}
                  width={scaleSize(220)}
                  unfilledColor="#F6F6F6"
                  borderColor="#F6F6F6"
                  color="#F3D743"
                  // height={5}
                />
              </View>
              <Text>90%</Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                <Text
                  style={{
                    color: "#717171",
                    fontFamily: "regular",
                    fontSize: scaleFont(14),
                  }}
                >
                  4
                </Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Progress.Bar
                  progress={0.2}
                  width={scaleSize(220)}
                  unfilledColor="#F6F6F6"
                  borderColor="#F6F6F6"
                  color="#F3D743"
                  // height={5}
                />
              </View>
              <Text>10%</Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                <Text
                  style={{
                    color: "#717171",
                    fontFamily: "regular",
                    fontSize: scaleFont(14),
                  }}
                >
                  3
                </Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Progress.Bar
                  progress={0.5}
                  width={scaleSize(220)}
                  unfilledColor="#F6F6F6"
                  borderColor="#F6F6F6"
                  color="#F3D743"
                  // height={5}
                />
              </View>
              <Text>90%</Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                <Text
                  style={{
                    color: "#717171",
                    fontFamily: "regular",
                    fontSize: scaleFont(14),
                  }}
                >
                  2
                </Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Progress.Bar
                  progress={0.5}
                  width={scaleSize(220)}
                  unfilledColor="#F6F6F6"
                  borderColor="#F6F6F6"
                  color="#F3D743"
                  // height={5}
                />
              </View>
              <Text>90%</Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                <Text
                  style={{
                    color: "#717171",
                    fontFamily: "regular",
                    fontSize: scaleFont(14),
                  }}
                >
                  1
                </Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Progress.Bar
                  progress={0.5}
                  width={scaleSize(220)}
                  unfilledColor="#F6F6F6"
                  borderColor="#F6F6F6"
                  color="#F3D743"
                  // height={5}
                />
              </View>
              <Text>90%</Text>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: scaleSize(20),
              marginTop: scaleSize(20),
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: 65,
                  height: 65,
                  borderRadius: 100 / 2,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "bold",
                    fontSize: scaleFont(10),
                    color: COLORS.txtGray,
                  }}
                >
                  GOOD
                </Text>
                <Text
                  style={{
                    fontFamily: "bold",
                    fontSize: scaleFont(10),
                    color: COLORS.txtGray,
                  }}
                >
                  NESS.
                </Text>
              </View>
              <View style={{ flex: 1, marginLeft: scaleSize(10) }}>
                <Text
                  style={{
                    color: "#0F0F0F",
                    fontFamily: "semibold",
                    fontSize: scaleFont(16),
                  }}
                >
                  Brand Name
                </Text>
                <View style={{ marginTop: scaleSize(8) }}>
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 16 / 2,
                      backgroundColor: "green",
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                    }}
                  ></View>
                  <Text
                    style={{
                      color: "#BDBDBD",
                      fontFamily: "regular",
                      fontSize: scaleFont(8),
                      marginLeft: scaleSize(12),
                    }}
                  >
                    Online
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{marginTop:scaleSize(20),marginHorizontal:scaleSize(20)}}>
            <Text style={{fontFamily:'regular',fontSize:scaleFont(24)}}>Related Product</Text>
          </View>

        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
