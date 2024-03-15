import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Pressable,
  Dimensions,
  Alert,
  TouchableHighlight,
  pressed,
    Modal ,

} from 'react-native';
import React, {useState} from 'react';
import styles from './ProductDetails.style';
//import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {WIDTH, scaleFont, scaleSize} from '../Constants/Mixins';
import INFO_SVG from '../assets/svg/Info.svg';
import NAVIGATIONARROW_SVG from '../assets/svg/navigateArrw.svg';
import CHAT_SVG from '../assets/svg/Chat.svg';
import STAR_SVG from '../assets/svg/Star.svg';
import {COLORS} from '../Constants/theme';
import * as Progress from 'react-native-progress';
import ProductCartView from './ProductCartView';
import BUY_SVG from '../assets/svg/Buy.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TickSquare from '../assets/svg/TickSquare.svg';
import { PRODUCT_LIST, arrayOfImages } from '../db';


// const {height, width} = Dimensions.get('window');
const image1 = require('../assets/Products/Product1.png');
const image2 = require('../assets/Products/Product2.png');
const image3 = require('../assets/Products/Product3.png');
const image4 = require('../assets/Products/Product4.png');
const image5 = require('../assets/Products/Product1.png');
const image6 = require('../assets/Products/Product4.png');

const ProductDetails = ({navigation}) => {
  const [cartItems, setCartItems] = useState([]);
  const Colors = ['#08609C', '#AD63C2', '#DEAD3D', '#CD3B3B', '#FFE0D5'];
  const SIZES = ['S', 'M', 'L', 'XL'];
  const [size, setSize] = useState(SIZES[0]);
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  // Function to handle adding item to cart
  const handleAddToCart = () => {
    if (!selectedSize) {
      // If size is not selected, show a warning
      Alert.alert('Warning', 'Please select your size');
    } else {
      // If size is selected, add item to cart
      const newItem = {
        size: selectedSize,
        count: count,
        // You might want to include more details about the product here
      };
      setCartItems([...cartItems, newItem]);
      // Navigate to cart page and pass the cart items as route params
      navigation.navigate('Cart', {cartItems: [...cartItems, newItem]});
    }
  };
  const [pressed, setPressed] = useState(false);
  const [showSizeChart, setShowSizeChart] = useState(false);
  //const [showSizeChart, setShowSizeChart] = useState(false);
  return (
    <View style={styles.main}>
    <ScrollView>
        <View style={styles.wishListHeader}>
          <TouchableOpacity>
            <Image
              source={require('../assets/Icons/Arrow.png')}
              onPress={() => props.navigation.goBack()}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', gap: 20, display: 'flex'}}>
              <Image source={require('../assets/Icons/searchIcon.png')} />
              <Image source={require('../assets/Icons/Cart.png')} />
              <Image source={require('../assets/Icons/Wishlist.png')} />
            </View>
          </TouchableOpacity>
        </View>

        

        <View style={styles.headerContainer}>
          <Image
            source={require('../assets/Products/Product1.png')}
            style={styles.image}
          />
        </View>

<View style={{flexDirection:"row"}}>
  {arrayOfImages.map((item)=>{return(<Image source={{uri:item.image}} style={{height:90,width:90}}/>)})}
</View>

        {/* <View style={{ flexDirection: 'row', gap: 5, marginLeft:15}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View> */}

        <View style={styles.titleRow}>
          <View style={styles.miniHead}>
            <Text style={styles.title}>Fashion</Text>
            <Ionicons name="star" size={12} color="gold" />
            <Text style={styles.title2}>4.9</Text>
            <Text style={styles.title}>(10 Reviews)</Text>
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
                }}>
                <SimpleLineIcons
                  name="minus"
                  size={20}
                  style={{color: '#000'}}
                />
              </TouchableOpacity>
              <Text style={{color: '#000'}}>{count}</Text>
              <TouchableOpacity
                onPress={() => {
                  setCount(count + 1);
                }}>
                <SimpleLineIcons
                  name="plus"
                  size={20}
                  style={{color: '#000'}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginHorizontal: 10}}>
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
            <Text style={styles.customSizes}>Size :</Text>
          </View>



<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<View style={styles.sizesRow}>
  {SIZES.map((s, i) => (
    <TouchableOpacity
      key={i}
      onPress={() => setSize(s)}
      style={{
        width: 24,
        height: 24,
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




          {!size && <Text style={{color: 'red'}}>Please select your size and color</Text>}

          <View style={styles.horizontal}></View>

          <View style={styles.descTab}>
            <INFO_SVG size={scaleSize(20)} />

            <View style={styles.textContainer}>
              <Text style={styles.descTxt}>Description</Text>
            </View>

            <TouchableOpacity>
              <NAVIGATIONARROW_SVG
                size={scaleSize(20)}
                style={{marginTop: scaleSize(5)}}
                onPress={() => {
                  navigation.navigate('Description');
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
                style={{marginTop: scaleSize(5)}}
                onPress={() => {
                  navigation.navigate('Reviews');
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: COLORS.white,
              // marginHorizontal: scaleSize(20),
              padding: scaleSize(20),
              elevation: 1,
              marginTop: scaleSize(30),
              borderRadius: scaleSize(10),
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                marginBottom: scaleSize(20),
              }}>
              <Text
                style={{
                  color: COLORS.black_light,
                  fontFamily: 'regular',
                  fontSize: scaleFont(60),
                }}>
                4.9
                <Text
                  style={{
                    color: '#BDBDBD',
                    fontFamily: 'regular',
                    fontSize: scaleFont(20),
                  }}>
                  /5
                </Text>
              </Text>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                  }}>
                  <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                  <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                  <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                  <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                  <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                </View>
                <Text
                  style={{
                    color: '#BDBDBD',
                    fontFamily: 'regular',
                    fontSize: scaleFont(10),
                  }}>
                  Based On 10 Reviews
                </Text>
              </View>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                <Text
                  style={{
                    color: '#717171',
                    fontFamily: 'regular',
                    fontSize: scaleFont(14),
                  }}>
                  5
                </Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                <Text
                  style={{
                    color: '#717171',
                    fontFamily: 'regular',
                    fontSize: scaleFont(14),
                  }}>
                  4
                </Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                <Text
                  style={{
                    color: '#717171',
                    fontFamily: 'Blinker-Regular',
                    fontSize: scaleFont(14),
                  }}>
                  3
                </Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                <Text
                  style={{
                    color: '#717171',
                    fontFamily: 'Blinker-Regular',
                    fontSize: scaleFont(14),
                  }}>
                  2
                </Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <STAR_SVG height={scaleSize(12)} width={scaleSize(12)} />
                <Text
                  style={{
                    color: '#717171',
                    fontFamily: 'Blinker-Regular',
                    fontSize: scaleFont(14),
                  }}>
                  1
                </Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: 65,
                  height: 65,
                  borderRadius: scaleSize(100 / 2),
                  backgroundColor: COLORS.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Blinker-SemiBold',
                    fontSize: scaleFont(10),
                    color: COLORS.txtGray,
                  }}>
                  GOOD
                </Text>
                <Text
                  style={{
                    fontFamily: 'Blinker-SemiBold',
                    fontSize: scaleFont(10),
                    color: COLORS.txtGray,
                  }}>
                  NESS.
                </Text>
              </View>
              <View style={{flex: 1, marginLeft: scaleSize(10)}}>
                <Text
                  style={{
                    color: '#0F0F0F',
                    fontFamily: 'semibold',
                    fontSize: scaleFont(16),
                  }}>
                  Brand Name
                </Text>
                <View style={{marginTop: scaleSize(8)}}>
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: scaleSize(16 / 2),
                      backgroundColor: 'green',
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                    }}></View>
                  <Text
                    style={{
                      color: '#BDBDBD',
                      fontFamily: 'Blinker-Regular',
                      fontSize: scaleFont(8),
                      marginLeft: scaleSize(12),
                    }}>
                    Online
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <FlatList
            data={PRODUCT_LIST}
            renderItem={({ item }) => <ProductCartView 
            item = {item} />}
            horizontal={false}
            numColumns={2}
            style={
              {
                // marginHorizontal: scaleSize(5),
                marginVertical: scaleSize(20),
              }
            }
          />

          {/* <View
              style={{
                height: scaleSize(75),
                width: WIDTH,
                backgroundColor: '#FFFFFF',
                // borderRadius: 40,
                borderTopLeftRadius: scaleSize(40),
                borderTopRightRadius: scaleSize(40),
                alignSelf: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: scaleSize(50),
              }}>
              <Text
                style={{
                  marginHorizontal: scaleSize(20),
                  fontFamily: 'Blinker-Regular',
                  fontSize: scaleFont(8),
                  color: COLORS.txtGray,
                  marginBottom: scaleSize(10),
                }}>
                Total Price :
              </Text>
              <Text
                style={{
                  marginHorizontal: scaleSize(20),
                  fontFamily: 'Blinker-Light',
                  fontSize: scaleFont(26),
                  position: 'absolute',
                  top: 35,
                  color: COLORS.txtGray,
                }}>
                $ 40.00
              </Text>

              <Pressable
                style={{
                  height: scaleSize(40),
                  width: WIDTH - scaleSize(190),
                  backgroundColor: '#F3D743',
                  borderRadius: 40,
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: scaleSize(20),    
            }}
            onPress={()=>navigation.navigate("Cart")}
            >
                <Text
                  style={{
                    fontSize: scaleFont(14),
                    textAlign: 'center',
                    fontFamily: 'Blinker-Regular',
                    color:'#000',
                   
                  }}>
                  <BUY_SVG
                    size={scaleSize(40)}
                    style={{
                      marginTop: scaleSize(30),
                      marginLeft: scaleSize(30),
                    }}
                  />
                 &nbsp;  Add To Cart
                </Text>
              </Pressable>
            </View> */}
          {/* <View
            style={{
              height: scaleSize(75),
              width: WIDTH,
              backgroundColor: '#FFFFFF',
              borderTopLeftRadius: scaleSize(40),
              borderTopRightRadius: scaleSize(40),
              alignSelf: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: scaleSize(50),
            }}>
            <Text
              style={{
                marginHorizontal: scaleSize(20),
                fontFamily: 'Blinker-Regular',
                fontSize: scaleFont(8),
                color: COLORS.txtGray,
                marginBottom: scaleSize(10),
              }}>
              Total Price :
            </Text>

            <Text
              style={{
                marginHorizontal: scaleSize(20),
                fontFamily: 'Blinker-Light',
                fontSize: scaleFont(26),
                position: 'absolute',
                top: 35,
                color: COLORS.txtGray,
              }}>
              $ 40.00
            </Text>
            <Pressable
              style={{
                height: scaleSize(40),
                width: WIDTH - scaleSize(190),
                backgroundColor: '#F3D743',
                borderRadius: 40,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: scaleSize(20),
              }}
              onPress={handleAddToCart}>
              <Text
                style={{
                  fontSize: scaleFont(14),
                  textAlign: 'center',
                  fontFamily: 'Blinker-Regular',
                  color: '#000',
                }}>
                <BUY_SVG
                  size={scaleSize(40)}
                  style={{marginTop: scaleSize(30), marginLeft: scaleSize(30)}}
                />{' '}
                &nbsp; Add To Cart
              </Text>
            </Pressable>
          </View> */}
          <View
            style={{
              height: scaleSize(75),
              width: WIDTH,
              backgroundColor: '#FFFFFF',
              borderTopLeftRadius: scaleSize(40),
              borderTopRightRadius: scaleSize(40),
              alignSelf: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: scaleSize(50),
            }}>
            <Text
              style={{
                marginHorizontal: scaleSize(20),
                fontFamily: 'Blinker-Regular',
                fontSize: scaleFont(8),
                color: COLORS.txtGray,
                marginBottom: scaleSize(10),
              }}>
              Total Price :
            </Text>
            <Text
              style={{
                marginHorizontal: scaleSize(20),
                fontFamily: 'Blinker-Light',
                fontSize: scaleFont(26),
                position: 'absolute',
                top: 35,
                color: COLORS.txtGray,
              }}>
              $ 40.00
            </Text>
            <Pressable
              style={{
                height: scaleSize(40),
                width: WIDTH - scaleSize(190),
                backgroundColor: '#F3D743',
                borderRadius: 40,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: scaleSize(20),
              }}
              onPress={handleAddToCart}>
              <Text
                style={{
                  fontSize: scaleFont(14),
                  textAlign: 'center',
                  fontFamily: 'Blinker-Regular',
                  color: '#000',
                }}>
                <BUY_SVG
                  size={scaleSize(40)}
                  style={{marginTop: scaleSize(30), marginLeft: scaleSize(30)}}
                />{' '}
                &nbsp; Add To Cart
              </Text>
            </Pressable>
          </View>
        </View>
        </ScrollView>
</View>
  );
};

export default ProductDetails;
