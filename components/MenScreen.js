import React, { useState, useCallback, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, StatusBar, ScrollView, Button, Dimensions,ImageBackground } from 'react-native';
import styles from './MenScreen.style';
import ProductCartView from "./ProductCartView";
import { scaleFont, scaleSize,HEIGHT, WIDTH, } from '../Constants/Mixins';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import { COLORS } from '../Constants/theme';
import TickSquare from '../assets/svg/TickSquare.svg';
import RBSheet from "react-native-raw-bottom-sheet";
import SETTINGS_SVG from '../assets/svg/Setting.svg';
import CHAT_SVG from '../assets/svg/Chat.svg';
import PAYMENT_SVG from '../assets/svg/Payment.svg';
import BOTTOM_BOOKMARK_SVG from '../assets/svg/Bottom_Bookmark.svg';
import LOCATION_SVG from '../assets/svg/Location.svg';
import BackGround from '../assets/Mask_group.png';
import ARROW_SVG from '../assets/svg/Arrow.svg';
import SEARCH_SVG from '../assets/svg/Search_black.svg';
import NOTIFICATION_SVG from '../assets/svg/Notification_black.svg';
import IMG_PROFILE from '../assets/onboard4.png';
import NAVI_ARRW_SVG from '../assets/svg/navigateArrw.svg';
import WALLET_SVG from '../assets/svg/Wallet.svg';
import BAG_SVG from '../assets/svg/Bag.svg';
import DISCOUNT_SVG from '../assets/svg/Discount.svg';

import { CATEGORIES_BOXER, CATEGORIES_JOGGERS, CATEGORIES_LOWER, CATEGORIES_LOWERS, CATEGORIES_TRACKPANTS, CATEGORIES_TRACKSUIT, CATEGORIES_TSHIRT, FILTERS, PRODUCT_LIST } from '../db';
import { useWindowDimensions } from 'react-native';
const MenScreen = (props) => {

  const refRBSheet = useRef();

  const [selectedOption, setSelectedOption] = useState(null);
  const [showSortModal, setShowSortModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState();
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


  const ACCOUNT_DATA = [
    {
      icon: <SETTINGS_SVG />,
      title: 'Categories',
    },
    {
      icon: <CHAT_SVG />,
      title: 'Size',
    },
    {
      icon: <PAYMENT_SVG />,
      title: 'Color',
    },
    {
      icon: <BOTTOM_BOOKMARK_SVG />,
      title: 'Price',
    },
    {
      icon: <LOCATION_SVG />,
      title: 'Brand',
    },
  ];

  const FilterPOPUP = () =>{

    return(
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={Dimensions.get("window").height/2}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
        >

<View style={{flex:1  }}>
<FlatList
        style={{flex: 1}}
        data={ACCOUNT_DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        // ListHeaderComponent={ListHeaderComponet}
      />
</View>

        {/* <YourOwnComponent /> */}
      </RBSheet>

    )

  }

  // const ListHeaderComponet = () => {
  //   return (
  //     <View>
  //       <ImageBackground
  //         source={BackGround}
  //         style={{
  //           height: HEIGHT / 3,
  //           width: WIDTH,
  //           marginTop: scaleSize(-30),
  //         }}
  //         resizeMode="contain">
  //         <View
  //           style={{
  //             flexDirection: 'row',
  //             marginTop: scaleSize(90),
  //             justifyContent: 'space-between',
  //             marginHorizontal: scaleSize(25),
  //             alignItems: 'center',
  //           }}>
  //           <ARROW_SVG
  //             height={scaleSize(20)}
  //             width={scaleSize(20)}
  //             // style={{ marginLeft: scaleSize(20) }}
  //             onPress={() => navigation.goBack()}
  //           />
  //           <View style={{flexDirection: 'row'}}>
  //             <SEARCH_SVG
  //               height={scaleSize(20)}
  //               width={scaleSize(20)}
  //               style={{marginHorizontal: scaleSize(15)}}
  //             />
  //             <NOTIFICATION_SVG height={scaleSize(20)} width={scaleSize(20)} />
  //           </View>
  //         </View>

      
  //         <View 
  //           style={{
  //             flexDirection: 'row',
  //             marginHorizontal: scaleSize(25),
  //             marginVertical: scaleSize(20),
  //             alignItems: 'center',
  //           }}>
  //           <Image
  //             source={IMG_PROFILE}
  //             style={{
  //               height: scaleSize(65),
  //               width: scaleSize(65),
  //               borderRadius: scaleSize(30),
  //             }}
  //             resizeMode="cover"
  //           />
  //           <View style={{marginLeft: scaleSize(10), flex: 1}}>
  //             <Text style={{fontSize: scaleFont(16), color:'#000', fontFamily: 'Blinker-Regular'}}>Savannah Rathore</Text>
  //             <View
  //               style={{
  //                 backgroundColor: COLORS.white,
  //                 paddingVertical: scaleSize(4),
  //                 paddingHorizontal: scaleSize(10),
  //                 alignItems: 'center',
  //                 marginTop: scaleSize(5),
  //                 borderRadius: scaleSize(5),
  //                 alignSelf: 'flex-start',
  //               }}>
  //               <Text style={{fontSize: scaleFont(10), color:'gray', fontFamily: 'Blinker-Regular'}}>@Savannah92</Text>
  //             </View>
  //           </View>
  //           <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
  //           <NAVI_ARRW_SVG height={scaleSize(20)} width={scaleSize(20)} />
  //           </TouchableOpacity>
           
  //         </View>
 
 


  //         <View
  //           style={{
  //             marginHorizontal: scaleSize(25),
  //             paddingHorizontal: scaleSize(50),
  //             borderRadius: scaleSize(50),
  //             elevation: 3,
  //             padding: scaleSize(20),
  //             backgroundColor: COLORS.white,
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //             justifyContent: 'space-between',
  //           }}>
  //           <TouchableOpacity style={{alignItems: 'center'}}>
  //             <WALLET_SVG height={scaleSize(20)} width={scaleSize(20)} />
  //             <Text
  //               style={{
  //                 color: '#717171',
  //                 fontFamily: 'Blinker-Regular',
  //                 fontSize: scaleFont(12),
  //               }}>
  //               Wallet
  //             </Text>
  //           </TouchableOpacity>

  //           <TouchableOpacity style={{alignItems: 'center'}}>
  //             <BAG_SVG height={scaleSize(20)} width={scaleSize(20)} />
  //             <Text
  //               style={{
  //                 color: '#717171',
  //                 fontFamily: 'Blinker-Regular',
  //                 fontSize: scaleFont(12),
  //               }}>
  //               Order
  //             </Text>
  //           </TouchableOpacity>

  //           <TouchableOpacity style={{alignItems: 'center'}}>
  //             <DISCOUNT_SVG height={scaleSize(20)} width={scaleSize(20)} />
  //             <Text
  //               style={{
  //                 color: '#717171',
  //                 fontFamily: 'Blinker-Regular',
  //                 fontSize: scaleFont(12),
  //               }}>
  //               Discount
  //             </Text>
  //           </TouchableOpacity>
  //         </View>
  //       </ImageBackground>
  //       <Text
  //         style={{
  //           color: '#717171',
  //           fontFamily: 'Blinker-Regular',
  //           fontSize: scaleFont(15),
  //           marginLeft: scaleSize(25),
  //           marginTop: scaleSize(30),
  //         }}>
  //         Account
  //       </Text>
  //     </View>
  //   );
  // };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          marginBottom: scaleSize(10),
          backgroundColor: COLORS.white,
          padding: scaleSize(15),
          flexDirection: 'row',
          marginHorizontal: scaleSize(25),
          elevation: 0.5,
          borderRadius: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {item.icon}
        <Text
          style={{
            flex: 1,
            color: '#0F0F0F',
            fontFamily: 'Blinker-Regular',
            fontSize: scaleFont(14),
            marginLeft: scaleSize(10),
          }}>
          {item.title}
        </Text>
        <NAVI_ARRW_SVG height={scaleSize(20)} width={scaleSize(20)} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <FilterPOPUP/>
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
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
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

      {/* <Modal isVisible={isModalVisible}
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
        </View>

      </Modal> */}





    </View>
  )
}

export default MenScreen;