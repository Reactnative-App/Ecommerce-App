import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import styles from './WishList.style';
import ProductCartView from '../../components/ProductCartView';
import PRODUCT_1 from '../../assets/Products/Product1.png';
import PRODUCT_2 from '../../assets/Products/Product2.png';
import PRODUCT_3 from '../../assets/Products/Product3.png';
import { scaleSize } from '../../Constants/Mixins';
// import ProductCartView from "../../components/ProductCartView";

const WishList = ({ navigation }) => {
  const products = [1, 2, 3, 4];
  const data = [
    {
      image: PRODUCT_1,
      title: 'Fashion',
      item_name: 'T-shirt cotton printed',
      qty: 1,
      price: '$40',
    },
    {
      image: PRODUCT_2,
      title: 'Fashion',
      item_name: 'Linen slim-fit t-shirt',
      qty: 1,
      price: '$40',
    },
    {
      image: PRODUCT_3,
      title: 'Fashion',
      item_name: 'T-shirt cotton printed',
      qty: 1,
      price: '$40',
    },
  ];

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.ListHeader}>
          <TouchableOpacity>
            <Image source={require('../../assets/Icons/Arrow.png')} onPress={() => navigation.goBack()} />
          </TouchableOpacity>
          <Text style={styles.centerTxt}>
            WISHLIST
          </Text>
          <Image source={require('../../assets/Icons/searchIcon.png')} />
        </View>

        <View style={{ marginTop: 40 }}>
          <View style={styles.container}>
            <View style={styles.image}>
              <Image source={require('../../assets/Products/Product4.png')} 
                style={styles.prodImg}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.prodTitle}>Fashion</Text>
              <Text style={styles.supplier}>
                Linen slim-fit t-shirt
              </Text>
              <Text style={styles.price}>$2536</Text>
            </View>

            <View style={{ padding: 10 }}>
              <TouchableOpacity>
                <Image source={require('../../assets/Icons/Delete.png')}
                style={{backgroundColor:'#F3D743', borderRadius:18}}
                />
              </TouchableOpacity>
            </View>
            <View style={{ padding: 10 }}>
              <TouchableOpacity>
                <Image source={require('../../assets/Icons/Delete.png')} />
              </TouchableOpacity>
            </View>

          </View>
        </View>
        <View>
          <View style={styles.container}>
            <View style={styles.image}>
              <Image source={require('../../assets/Products/Product1.png')} 
                style={styles.prodImg}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.prodTitle}>Fashion</Text>
              <Text style={styles.supplier}>
                Linen slim-fit t-shirt
              </Text>
              <Text style={styles.price}>$2536</Text>
            </View>

            <View style={{ padding: 10 }}>
              <TouchableOpacity>
                <Image source={require('../../assets/Icons/Delete.png')} 
                 style={{backgroundColor:'#F3D743', borderRadius:18}}/>
              </TouchableOpacity>
            </View>
            <View style={{ padding: 10 }}>
              <TouchableOpacity>
                <Image source={require('../../assets/Icons/Delete.png')} />
              </TouchableOpacity>
            </View>

          </View>
        </View>

        <View >
          <View style={styles.container}>
            <View style={styles.image}>
              <Image source={require('../../assets/Products/Product2.png')} 
                style={styles.prodImg}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.prodTitle}>Fashion</Text>
              <Text style={styles.supplier}>
                Linen slim-fit t-shirt
              </Text>
              <Text style={styles.price}>$2536</Text>
            </View>

            <View style={{ padding: 10 }}>
              <TouchableOpacity>
                <Image source={require('../../assets/Icons/Delete.png')}
                 style={{backgroundColor:'#F3D743', borderRadius:18}} />
              </TouchableOpacity>
            </View>
            <View style={{ padding: 10 }}>
              <TouchableOpacity>
                <Image source={require('../../assets/Icons/Delete.png')} />
              </TouchableOpacity>
            </View>

          </View>
        </View>


        <View>
            <Text style={styles.sdHeading}>You May Also Like</Text>
          </View>
          <View style={{marginTop: scaleSize( 20), marginHorizontal: scaleSize(10)}}>
            <FlatList
              data={products}
              renderItem={({item}) => <ProductCartView />}
              horizontal={false}
              numColumns={2}
              contentContainerStyle={{columnGap: 16}}
            />
          </View>

        {/* <ProductCartView/> */}

      </ScrollView>
    </View>
  )
}

export default WishList