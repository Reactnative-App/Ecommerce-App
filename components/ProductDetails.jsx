import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './ProductDetails.style';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

const ProductDetails = () => {
    const [count, setCount] = useState(1)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

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
                            <TouchableOpacity onPress={() => (decrement)}>
                                <SimpleLineIcons
                                    name='minus'
                                    size={20} />
                            </TouchableOpacity>
                            <Text>{count}</Text>
                            <TouchableOpacity onPress={() => (increment)}>
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

            </ScrollView>
        </View>
    )
}

export default ProductDetails