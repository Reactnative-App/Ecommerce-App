import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, FlatList, StatusBar, Button, Animated, ScrollView, } from 'react-native';
import styles from './MenScreen.style';
import ProductCartView from "./ProductCartView";
import { scaleFont, scaleSize } from '../Constants/Mixins';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
// import Modal from 'react-native-modal';
import Modal from "react-native-modal";
import { COLORS } from '../Constants/theme';
import { Slider } from 'react-native-elements/dist/slider/Slider';
import TickSquare from '../assets/svg/TickSquare.svg';

import { CATEGORIES_BOXER, CATEGORIES_JOGGERS, CATEGORIES_LOWER, CATEGORIES_LOWERS, CATEGORIES_TRACKPANTS, CATEGORIES_TRACKSUIT, CATEGORIES_TSHIRT, FILTERS, PRODUCT_LIST } from '../db';
const MenScreen = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showSortModal, setShowSortModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const CATEGORY = ['All', 'Men', 'Women', 'Boys', 'Girls']

  const Colors = ['#08609C', '#AD63C2', '#DEAD3D', '#CD3B3B', '#FFE0D5'];
  const [selectedSize, setSelectedSize] = useState(null);
  DISCOUNT = ['Discard', 'Apply']

  const SIZES = ['S', 'M', 'L', 'XL'];


  const [size, setSize] = useState(SIZES[0]);
  const [category, setCategory] = useState();
  const [discount, setDiscount] = useState();
  const [range, setRange] = useState('50%');
  const [sliding, setSliding] = useState();
  const products = [1, 2, 3, 4];

  const { type } = props.route.params;

  useEffect(() => { 
    if (type == "T-Shirt") { setFilterData(CATEGORIES_TSHIRT) } 
  
    else if(type == "TrackSuit") { setFilterData(CATEGORIES_TRACKSUIT) }

    else if(type == "Boxer") { setFilterData(CATEGORIES_BOXER) }

    else if(type == "Lowers") { setFilterData(CATEGORIES_LOWERS) }
  
  },[]
  
  )

  const onPressSize = (data) => {
    setSize(data)

    const filteredObjects = FILTERS.filter(item => item.size.includes(data));

    console.log(filteredObjects);
    setFilterData(filteredObjects)
  }

  const [filterData, setFilterData] = useState([])

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const handleToggleCheckbox = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  const toggleFilterModal = () => {
    setShowFilterModal(!showFilterModal);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.upperRow}>
        <TouchableOpacity>
          <Image source={require('../assets/Icons/ArrowWht.png')} onPress={() => navigation.goBack()}/>
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
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.btnFilter}>
            <Text style={styles.btnText}>
              <Image source={require("../assets/Icons/Filter.png")} /> &nbsp; Filter
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setShowSortModal(true)}>
          <View style={styles.btnSort}>
            <Text style={styles.btnText}>Sort By &nbsp;
              <Image source={require("../assets/Icons/sortBy.png")} />
            </Text>
          </View>
        </TouchableOpacity>
      </View>
  <ScrollView>
      <View style={{ marginTop: scaleSize(20), marginHorizontal: scaleSize(10) }}>
        <FlatList
          data={filterData}
          renderItem={({ item }) => <ProductCartView
            item={item} />}
          horizontal={false}
          numColumns={2}
          contentContainerStyle={{ columnGap: 16 }}
        />
      </View>
      </ScrollView>
      {/* Sort Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showSortModal}
        onRequestClose={() => setShowSortModal(false)}
        style={{ margin: '0' }}
      >
        <View style={[styles.modalContainer, { justifyContent: 'flex-end' }]}>
          <View style={styles.modalContent}>
            <Text style={{ color: '#000', fontFamily: 'Blinker-SemiBold', fontSize: scaleFont(25), alignSelf: 'center', marginBottom: 15 }}>SORT BY</Text>
            {["Relevance", "New Arrivals", "Price(High to Low)", "Price(Low to High)", "Ratings", "Discount"].map(option => (
              <View style={styles.checkboxItem} key={option}>
                <Text style={{ color: '#000', fontFamily: 'Blinker-SemiBold' }}>{option}</Text>
                <TouchableOpacity onPress={() => handleToggleCheckbox(option)}>
                  {selectedOption === option ? (
                    <MaterialIcons
                      name="check-circle"
                      size={scaleSize(20)}
                      color="#F3D743"
                    />
                  ) : (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={scaleSize(18)}
                      color="#F3D743"
                    />
                  )}
                </TouchableOpacity>
              </View>
            ))}
            {/* Close button */}
            <TouchableOpacity onPress={() => setShowSortModal(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal isVisible={isModalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        style={{ width: '80%', backgroundColor: '#fff', margin: '0' }} >

        <View style={{ flex: 1 }}>
          <View style={{ marginBottom: scaleSize(20) }}>
            <Text style={{
              color: '#000', fontFamily: 'Blinker-SemiBold', fontSize: scaleFont(25), alignSelf: 'center', marginBottom: 15, marginTop: scaleSize(10),
            }}>Filter</Text>
          </View>
          <Text style={{ color: '#000', fontSize: scaleSize(20), paddingLeft: '5%', fontFamily: 'Blinker-SemiBold', flexDirection: 'row', marginBottom: scaleSize(10) }}>Price</Text>

          <View style={styles.customSlider} >

            <View>
              <Text style={{ color: '#000', fontWeight: 'bold', fontSize: scaleFont(15), alignSelf: 'center' }} >{range}</Text>

              <Slider

                style={{ width: scaleSize(250), height: scaleSize(40), }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor='#F3D743'
                maximumTrackTintColor='#838b8e'
                thumbTintColor='#F3D743'
                thumbStyle={{ width: scaleSize(15), height: scaleSize(15) }}
                value={.5}
                onValueChange={value => setRange(parseInt(value * 100) + '%')}
                onSlidingStart={() => setSliding()}
              // onSlidingComplete={()=> setSliding('Inactive')}
              />
            </View>
          </View>

          <View style={styles.sizeDirection}>
            <Text style={styles.customSizes}>Category</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <View style={styles.sizesRow}>
              {CATEGORY.map((s, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => setCategory(s)}
                  style={{
                    width: 74,
                    height: 34,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: s === size ? '' : '#F3D743',

                    borderRadius: scaleSize(44),
                    backgroundColor: s === category ? '#F3D743' : 'transparent',
                  }}>
                  <Text
                    style={{
                      color: s === category ? '#fff' : '#000',
                      fontFamily: 'Blinker-Regular',
                      fontSize: scaleSize(10),
                    }}>
                    {s}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

          </View>

          <View style={styles.sizeDirection}>
            <Text style={styles.customSizes}>Color</Text>
          </View>
          <View style={styles.sizesRow}>
    {Colors.map((color, i) => (
      <TouchableOpacity
        key={i}
        onPress={() => setSelectedSize(color)}
        style={{
          width: 24,
          height: 24,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: color,
          borderRadius: scaleSize(44),
          marginRight: scaleSize(10),
        }}
      >
        {selectedSize === color && (
          < TickSquare

            style={{
              width: 15,
              height: 15,
              backgroundColor: 'white',
              borderRadius: 6,
              position: 'absolute',
            }}
          />
        )}
      </TouchableOpacity>
    ))}
  
</View>


          <View style={styles.sizeDirection}>
            <Text style={styles.customSizes}>Size</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <View style={styles.sizesRow}>
              {SIZES.map((s, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => onPressSize(s)}
                  style={{
                    width: 54,
                    height: 34,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: s === size ? '' : '#F3D743',
                    borderRadius: scaleSize(44),
                    backgroundColor: s === size ? '#F3D743' : 'transparent',
                  }}>
                  <Text
                    style={{
                      color: s === size ? '#fff' : '#000',
                      fontFamily: 'Blinker-Regular',
                      fontSize: scaleSize(10),
                    }}>
                    {s}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

          </View>

          <View style={styles.sizeDirection}>
            <Text style={styles.customSizes}>Discount</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <View style={{
              flexDirection: "row",
              justifyContent: 'space-around',
              gap: scaleSize(4),
              marginTop: scaleSize(6),
              paddingLeft: '5%',
              paddingTop: '5%',
              paddingBottom: '5%',
              paddingRight: '5%',
              backgroundColor: '#FAF9F6',
              width: '100%',
            }}>
              {DISCOUNT.map((s, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => setDiscount(s)}
                  style={{
                    width: 100,
                    height: 34,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: s === discount ? '' : '#F3D743',
                    borderRadius: scaleSize(44),
                    backgroundColor: s === discount ? '#F3D743' : 'transparent',
                  }}>
                  <Text
                    style={{
                      color: s === discount ? '#fff' : '#000',
                      fontFamily: 'Blinker-Regular',
                      fontSize: scaleSize(10),
                    }}>
                    {s}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

          </View>


          <TouchableOpacity onPress={() => toggleModal(false)}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
          {/* <Button title="Close" onPress={toggleModal} /> */}
        </View>
      </Modal>
    </View>
  )
}

export default MenScreen;