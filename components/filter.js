import {
    View,
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  import RBSheet from 'react-native-raw-bottom-sheet';
//   import SVG_UNSELECT_BOX from "../assets/svg/box-gray.svg";
//   import SVG_SELECT_BOX from "../assets/svg/check-box.svg";
  const window = Dimensions.get('screen');
  export const WIDTH = window.width;
  export const HEIGHT = window.height;
  const FILTER = [
    {id: 1, label: 'Brand', isSelected:true},
    {id: 2, label: 'Price', isSelected:false},
    {id: 3, label: 'Rating', isSelected:false},
    {id: 4, label: 'Discount', isSelected:false},
    {id: 5, label: 'Color', isSelected:false},
  ];
  const brand_data = [
    {id: 1, label: 'Brand 1',brand_id:1},
    {id: 2, label: 'Brand 2',brand_id:2},
    {id: 3, label: 'Brand 3',brand_id:3},
    {id: 4, label: 'Brand 4',brand_id:4},
    {id: 5, label: 'Brand 5',brand_id:5},
  ];
  const price_data = [
    {id: 1, label: '50,000-60,000'},
    {id: 2, label: '60,000-70,000'},
    {id: 3, label: '70,000-80,000'},
    {id: 4, label: '80,000-90,000'},
    // {id: 5, label: 'Brand5'},
  ];
  const discount_data = [
    {id: 1, label: 10},
    {id: 2, label: 20},
    {id: 3, label: 30},
    {id: 4, label: 40},
    {id: 5, label: 50},
    {id: 6, label: 60},
    {id: 7, label: 70},
  ];
  const rating_data = [
    {id: 1, label: '1'},
    {id: 2, label: '2'},
    {id: 3, label: '3'},
    {id: 4, label: '4'},
    {id: 5, label: '5'},
  ];
  const color_data=[
    {id: 1, label: 'Red'},
    {id: 2, label: 'Green'},
    {id: 3, label: 'Blue'},
    {id: 4, label: 'Black'},
    {id: 5, label: 'Yellow'},
  ]
  const Filters = props => {
    const [activeFilter, setIsActiveFilter] = useState(1);
    const [status, setStatus] = useState(FILTER);
    const [brandSelect, setBrandSelect] = useState(brand_data);
    const [priceSelect, setPriceSelect] = useState(price_data);
    const [discountSelect, setDiscountSelect] = useState(discount_data);
    const [ratingSelect, setRatingtSelect] = useState(rating_data);
    const [colorSelect, setColorSelect] = useState(color_data);
    const [filterBrandSelect, setFilterBrandSelect] = useState([]);
    const [filterPriceSelect, setFilterPriceSelect] = useState([]);
    const [filterDiscountSelect, setFilterDiscountSelect] = useState([]);
    const [filterRatingSelect, setFilterRatingtSelect] = useState([]);
    const [filterColorSelect, setFilterColorSelect] = useState([]);
    const {filter, refRBSheet} = props;
  
    const selectFilter = (item_id, index) => {
      // console.log(item_id);
      const mList = status.map((item, mIndex) => {
        if (mIndex === index) {
          return {...item, isSelected: true};
        } else return {...item, isSelected: false};
      });
      setStatus(mList);
      setIsActiveFilter(item_id);
    };
    const selectBrandFilter = (item, index) => {
      let mList = brandSelect.map(it => {
        if (item.id == it.id) {
          return {
            ...it,
            isSelected: it.isSelected == null ? true : !it.isSelected,
          };
        } else {
          return {...it};
        }
      });
      // console.log(mList);
      const selectedBrands = mList.filter(item => item.isSelected === true);
      const brand_selected= selectedBrands.map(item=>item.brand_id)
      console.log(brand_selected);
      setFilterBrandSelect(brand_selected)
      setBrandSelect(mList);
    };
    const selectPriceFilter = (item, index) => {
      let mList = priceSelect.map(it => {
        if (item.id == it.id) {
          return {
            ...it,
            isSelected: it.isSelected == null ? true : !it.isSelected,
          };
        } else {
          return {...it};
        }
      });
      const selectedPrice = mList.filter(item => item.isSelected === true);
      const price_selected= selectedPrice.map(item=>item.label)
      console.log(price_selected);
      setFilterPriceSelect(price_selected)
      setPriceSelect(mList);
    };
    const selectDiscountFilter = (item, index) => {
      let mList = discountSelect.map(it => {
        if (item.id == it.id) {
          return {
            ...it,
            isSelected: it.isSelected == null ? true : !it.isSelected,
          };
        } else {
          return {...it};
        }
      });
      const selectedDiscount = mList.filter(item => item.isSelected === true);
      const discount_selected= selectedDiscount.map(item=>item.label)
      console.log(discount_selected);
      setFilterDiscountSelect(discount_selected)
      setDiscountSelect(mList);
    };
    const selectRatingFilter = (item, index) => {
      let mList = ratingSelect.map(it => {
        if (item.id == it.id) {
          return {
            ...it,
            isSelected: it.isSelected == null ? true : !it.isSelected,
          };
        } else {
          return {...it};
        }
      });
      const selectedRating = mList.filter(item => item.isSelected === true);
      const rating_selected= selectedRating.map(item=>item.label)
      console.log(rating_selected);
      setFilterRatingtSelect(rating_selected)
      setRatingtSelect(mList);
    };
    const selectColorFilter = (item, index) => {
      let mList = colorSelect.map(it => {
        if (item.id == it.id) {
          return {
            ...it,
            isSelected: it.isSelected == null ? true : !it.isSelected,
          };
        } else {
          return {...it};
        }
      });
      const selectedColor = mList.filter(item => item.isSelected === true);
      const color_selected= selectedColor.map(item=>item.label)
      console.log(color_selected);
      setFilterColorSelect(color_selected)
      setColorSelect(mList);
    };
    const clearFilter = () => {
      setBrandSelect(brand_data);
      setDiscountSelect(discount_data);
      setPriceSelect(price_data);
      setRatingtSelect(rating_data);
      setColorSelect(color_data)
    };
    const onPressSubmit = () => {
      var filterDataCollection = {
        filterBrandSelect,
        filterPriceSelect,
        filterDiscountSelect,
        filterRatingSelect,
        filterColorSelect,
      };
      filter(filterDataCollection);
      refRBSheet.current.close()
    };
    return (
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={true}
        openDuration={300}
        closeDuration={300}
        dragFromTopOnly={true}
        height={HEIGHT}
        // customStyles={{
        //   container: {
        //     // flex:1,
        //     height:HEIGHT,
        //   }}}
        // draggableIcon: {
        //   backgroundColor: Colors.WHITE
        // }
        // }}
        // contentContainerStyle={{flex:1}}
      >
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 20,
              backgroundColor:'orange'
            }}>
            <View style={{flex: 0.3}}>
              <Text
                style={{
                  color: 'black',
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Filters
              </Text>
            </View>
            <View style={{flex: 0.7}}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'right',
                  marginRight: 20,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
                onPress={() => refRBSheet.current.close()}>
                close
              </Text>
            </View>
          </View>
  
          <View style={{flexDirection: 'row', flex: 0.9}}>
            {/* left side meanu start */}
            <View style={{backgroundColor: '#D3D3D3', flex: 0.3}}>
              <ScrollView contentContainerStyle={{flexGrow: 1}}>
                {status.map((item, index) => {
                  let isSelected =
                    item.isSelected !== null && item.isSelected ? true : false;
                  return (
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20,
                        backgroundColor: isSelected ? 'white' : '#D3D3D3',
                      }}
                      key={index.toString()}
                      onPress={() => selectFilter(item.id, index)}>
                      <Text style={{color: isSelected ? 'red' : 'black'}}>
                        {item.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
            {/* left side meanu end */}
  
            {/* right side meanu start */}
            <View style={{backgroundColor: 'white', flex: 0.7}}>
              <ScrollView contentContainerStyle={{flexGrow: 1}}>
                {activeFilter == 1 && (
                  <View>
                    {brandSelect.map((item, index) => {
                      let isSelected =
                        item.isSelected !== null && item.isSelected
                          ? true
                          : false;
                      return (
                        <TouchableOpacity
                          style={{
                            justifyContent: 'center',
                            alignSelf: 'flex-start',
                            padding: 20,
                            // backgroundColor: isSelected ? 'yellow' : 'white',
                            flexDirection:'row'
                          }}
                          key={index.toString()}
                          onPress={() => selectBrandFilter(item, index)}>
                             {/* {isSelected?<SVG_SELECT_BOX/>:<SVG_UNSELECT_BOX/>} */}
                          <Text style={{color: 'black',marginLeft:10}}>{item.label}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                )}
                {activeFilter == 2 && (
                  <View>
                    {priceSelect.map((item, index) => {
                      let isSelected =
                        item.isSelected !== null && item.isSelected
                          ? true
                          : false;
                      return (
                        <TouchableOpacity
                          style={{
                            justifyContent: 'center',
                            alignSelf: 'flex-start',
                            padding: 20,
                            // backgroundColor: isSelected ? 'yellow' : 'white',
                            flexDirection:'row'
                          }}
                          key={index.toString()}
                          onPress={() => selectPriceFilter(item, index)}>
                               {/* {isSelected?<SVG_SELECT_BOX/>:<SVG_UNSELECT_BOX/>} */}
                          <Text style={{color: 'black',marginLeft:10}}>{item.label}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                )}
                {activeFilter == 4 && (
                  <View>
                    {discountSelect.map((item, index) => {
                      let isSelected =
                        item.isSelected !== null && item.isSelected
                          ? true
                          : false;
                      return (
                        <TouchableOpacity
                          style={{
                            justifyContent: 'center',
                            alignSelf: 'flex-start',
                            padding: 20,
                            // backgroundColor: isSelected ? 'yellow' : 'white',
                            flexDirection:'row'
                          }}
                          key={index.toString()}
                          onPress={() => selectDiscountFilter(item, index)}>
                                 {/* {isSelected?<SVG_SELECT_BOX/>:<SVG_UNSELECT_BOX/>} */}
                          <Text style={{color: 'black',marginLeft:10}}>{item.label}%</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                )}
                {activeFilter == 3 && (
                  <View>
                    {ratingSelect.map((item, index) => {
                      let isSelected =
                        item.isSelected !== null && item.isSelected
                          ? true
                          : false;
                      return (
                        <TouchableOpacity
                          style={{
                            justifyContent: 'center',
                            alignSelf: 'flex-start',
                            padding: 20,
                            // backgroundColor: isSelected ? 'yellow' : 'white',
                            flexDirection:'row'
                          }}
                          key={index.toString()}
                          onPress={() => selectRatingFilter(item, index)}>
                             {/* {isSelected?<SVG_SELECT_BOX/>:<SVG_UNSELECT_BOX/>} */}
                          <Text style={{color: 'black',marginLeft:10}}>{item.label}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                )}
                {activeFilter == 5 && (
                  <View>
                    {colorSelect.map((item, index) => {
                      let isSelected =
                        item.isSelected !== null && item.isSelected
                          ? true
                          : false;
                      return (
                        <TouchableOpacity
                          style={{
                            justifyContent: 'center',
                            alignSelf: 'flex-start',
                            padding: 20,
                            // backgroundColor: isSelected ? 'yellow' : 'white',
                            flexDirection:'row'
                          }}
                          key={index.toString()}
                          onPress={() => selectColorFilter(item, index)}>
                             {/* {isSelected?<SVG_SELECT_BOX/>:<SVG_UNSELECT_BOX/>} */}
                          <Text style={{color: 'black',marginLeft:10,textAlign:'left'}}>{item.label}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                )}
              </ScrollView>
            </View>
            {/* right side meanu end */}
          </View>
  
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // flex: 0.1,
              // height:130,
              alignItems: 'center',
              paddingHorizontal: 30,
            }}>
            <Text
              style={{
                color: 'red',
                textDecorationLine: 'underline',
                fontSize: 16,
              }}
              onPress={() => clearFilter()}>
              Clear Filter
            </Text>
            <TouchableOpacity
              onPress={() => onPressSubmit()}
              style={{
                // width: '80%',
                backgroundColor: 'orange',
                borderRadius: 10,
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 15,
                paddingHorizontal: 30,
              }}>
              <Text style={{color: '#fff', fontSize: 22, fontWeight: 'bold'}}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    );
  };
  
  export default Filters;
  