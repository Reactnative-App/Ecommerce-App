import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './Profile.style';
// import ProductCartView from "../../components/ProductCartView";

const Profile = ({ navigation }) => {


  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.wishListHeader}>
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
              <Image source={require('../../assets/Icons/wishlistImg.png')}
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
                <Image source={require('../../assets/Icons/Delete.png')} />
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
          <TouchableOpacity style={styles.container}>
            <View style={styles.image}>
              <Image source={require('../../assets/Icons/wishlistImg.png')}
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
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.container}>
            <View style={styles.image}>
              <Image source={require('../../assets/Icons/wishlistImg.png')}
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
          </TouchableOpacity>
        </View>

        {/* <ProductCartView/> */}

      </ScrollView>
    </View>
  )
}

export default Profile
