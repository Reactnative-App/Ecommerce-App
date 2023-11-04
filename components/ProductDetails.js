import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './ProductDetails.style';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { WIDTH, scaleFont, scaleSize } from "../Constants/Mixins";
import INFO_SVG from "../assets/svg/Info.svg";
import NAVIGATIONARROW_SVG from "../assets/svg/navigateArrw.svg";
import CHAT_SVG from "../assets/svg/Chat.svg";

const ProductDetails = ({ navigation }) => {

    const SIZES = ["S", "M", "L", "XL"];

    const [size, setSize] = useState(SIZES[0]);
    const [count, setCount] = useState(1)

    return (
        <View style={styles.main}>
            <ScrollView>
                <View style={styles.wishListHeader}>
                    <TouchableOpacity>
                        <Image source={require('../assets/Icons/Arrow.png')} onPress={() => navigation.goBack()} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', gap: 20, display: "flex" }}>
                            <Image source={require('../assets/Icons/searchIcon.png')} />
                            <Image source={require('../assets/Icons/Cart.png')} />
                            <Image source={require('../assets/Icons/Wishlist.png')} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.titleRow}>
                    <View style={styles.miniHead}>
                        <Text style={styles.title}>Fashion</Text>
                        <Ionicons
                            name='star'
                            size={12}
                            color="gold"
                        />
                        <Text>4.9</Text>
                        <Text>(10 Reviews)</Text>
                    </View>
                    <View>
                    </View>
                </View>

                <View style={styles.details}>
                    <View style={styles.ratingRow}>
                        <View style={styles.rating}>
                            <Text style={styles.txt}>Linen slim-fit t-shirt</Text>
                        </View>

                        <View style={styles.rating}>
                            <TouchableOpacity onPress={() => {
                                if (count > 1) {
                                    setCount(count - 1)
                                }
                            }}>
                                <SimpleLineIcons
                                    name='minus'
                                    size={20} />
                            </TouchableOpacity>
                            <Text>{count}</Text>
                            <TouchableOpacity onPress={() => {
                                setCount(count + 1)
                            }}>
                                <SimpleLineIcons
                                    name='plus'
                                    size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Text style={styles.price}>
                            $40.00
                        </Text>
                    </View>
                </View>

                <View style={styles.descriptionWrapper}>

                    <Text style={styles.descTxt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eaque, nemo corporis voluptate quas alias sunt molestiae dolores deserunt molestias quia velit possimus autem? Aliquid numquam atque unde officiis porro.r</Text>
                </View>


                <View style={styles.sizeTop}>
                    <View style={styles.sizeDirection}>
                        <Text
                            style={styles.customSizes}>
                            Color :
                        </Text>
                    </View>

                    <View
                        style={styles.sizesRow}>
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
                            >
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.sizeTop}>
                    <View style={styles.sizeDirection}>
                        <Text
                            style={styles.customSizes}>
                            Size :
                        </Text>
                    </View>

                    <View
                        style={styles.sizesRow}>
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
                                    borderColor: s === size ? '#bdbdbd' : '',
                                    borderRadius: 44,
                                }}
                            >
                                <Text
                                    style={{
                                        color: s === size ? '#000' : '#bdbdbd',
                                        fontFamily: 'regular',
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

                        <INFO_SVG
                            size={scaleSize(20)} />

                        <View style={styles.textContainer}>

                            <Text style={styles.descTxt}>
                                Description
                            </Text>

                        </View>

                        <TouchableOpacity>
                            <NAVIGATIONARROW_SVG
                                size={scaleSize(20)} style={{ marginTop: scaleSize(5) }}
                                onPress={() => {
                                    navigation.navigate("Description");
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.horizontal}></View>

                    <View style={styles.descTab}>

                        <CHAT_SVG
                            size={scaleSize(20)} />

                        <View style={styles.textContainer}>

                            <Text style={styles.descTxt}>
                                Reviews
                            </Text>

                        </View>

                        <TouchableOpacity>
                            <NAVIGATIONARROW_SVG
                                size={scaleSize(20)} style={{ marginTop: scaleSize(5) }}
                                onPress={() => {
                                    navigation.navigate("Reviews");
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default ProductDetails