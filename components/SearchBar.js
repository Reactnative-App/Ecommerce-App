// import { View, TextInput, ActivityIndicator, FlatList, Image, Text, Modal, TouchableOpacity } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import styles from './SearchBar.style';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// const API_ENDPOINT = `https://fakestoreapi.com/products`
// import filter from 'lodash.filter'
// import  FilterIcon  from 'react-native-vector-icons/Ionicons';

// const SearchBar = () => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(null);
//     const [fullData, setFullData] = useState([]);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [modal, setModal] = useState(false)

//     useEffect(() => {
//         setIsLoading(true);
//         fetchData(API_ENDPOINT);
//     }, []);

//     const fetchData = async (url) => {
//         try {
//             const response = await fetch(url);
//             const json = await response.json();
//             setData(json);

//             console.log(json)
//             setFullData(json)
//             setIsLoading(false)
//         } catch (error) {
//             setError(error);
//             console.log(error);
//         }
//     }

//     const handleSearch = (query) => {
//         setSearchQuery(query)
//         const formattedQuery = query.toLowerCase();
//         const filteredData = filter(fullData, (user) => {
//             return contains(user, formattedQuery);
//         });
//         setData(filteredData);
//     }

//     const contains = ({ name, email }, query) => {
//         const { first, last } = name;
//         if (first.includes(query) || last.includes(query) || email.includes(query)) {
//             return true;
//         }
//         return false;
//     }

//     if (isLoading) {
//         return (
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                 <ActivityIndicator size={'large'} color='#5500dc' />
//             </View>
//         );
//     }

//     if (error) {
//         return (
//             <View style={styles.ckInternet}>
//                 <Text>Error in fetching data... Please check your internet connection</Text>
//             </View>
//         );
//     }

//     return (

//         <View style={styles.searchTop}>
//             <View style={{
//                   borderColor:'#ccc',
//          borderWidth:1, borderRadius:8, flexDirection:"row", justifyContent:'space-between', alignItems:'center'}}>
//             <TextInput
//                 placeholder='Search'
//                 clearButtonMode='always'
//                 autoCapitalize='none'
//                 autoCorrect={false}
//                 style={styles.searchBox}
//                 onChangeText={(query) => handleSearch(query)}
//             />
//             <FilterIcon name='filter-outline' size={20} color='black' style={{marginEnd:10}} onPress={()=>setModal(!modal)} />

//             </View>

//             <FlatList
//                 data={data}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => (
//                     <View style={styles.imageContainer}>
//                         <Image source={{ uri: item.image }} style={styles.image} />
//                         <View>
//                             <Text style={styles.txtName}>{item.title} </Text>
//                             <Text style={styles.txtEmail}>{item.description}</Text>
//                             <Text style={styles.txtCategory}>{item.category}</Text>
//                             <Text style={styles.txtCategory}>{item.rating.rate}</Text>
//                             <Text style={styles.txtCategory}>₹{item.price}</Text>
//                         </View>
//                     </View>
//                 )}
//             />

// <Modal
//     animationType='slide'
//     transparent={true}
//      visible={modal}
//      onRequestClose={()=>setModal(false)}
//     >
//     <View style={styles.modalView}>
//         <TouchableOpacity style={styles.btn}>
//             <Text>Low to High</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.btn}>
//             <Text> By Name</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.btn}>
//             <Text>By Price</Text>
//         </TouchableOpacity>
     

     
//     </View>
    
//     </Modal>

//         </View>

//     )
// }

// export default SearchBar.

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity ,StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { scaleSize } from '../Constants/Mixins';
import styles from './SearchBar.style';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    loadSearchHistory();
  }, []);

  const loadSearchHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('searchHistory');
      if (history !== null) {
        setSearchHistory(JSON.parse(history));
      }
    } catch (error) {
      console.error('Error loading search history:', error);
    }
  };

  const saveSearchTerm = async (term) => {
    try {
      const updatedHistory = [term, ...searchHistory.filter(item => item !== term)];
      setSearchHistory(updatedHistory.slice(0, 10)); // Limit history to 10 items
      await AsyncStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    } catch (error) {
      console.error('Error saving search term:', error);
    }
  };

  const handleSearchInputChange = (text) => {
    setSearchTerm(text);
    // You can add additional logic here if needed, like debouncing the search
  };

  const handleSearch = () => {
    console.log('Performing search for:', searchTerm);
    saveSearchTerm(searchTerm);
    // Perform search operation
  };

  const clearSearchHistory = async () => {
    try {
      await AsyncStorage.removeItem('searchHistory');
      setSearchHistory([]);
    } catch (error) {
      console.error('Error clearing search history:', error);
    }
  };

  return (
    <View style={styles.searchTop}>
         <StatusBar
          barStyle={'dark-content'}
          translucent
          backgroundColor="transparent"
        />
      <View style={styles.input}>
        <Image
          source={require('../assets/Icons/searchIcon.png')}
          style={{marginTop: 15, marginLeft: 15, marginRight: 15}}
        />
        <TextInput
          placeholder="Search Product"
          style={{ flex: 1, fontFamily: 'Blinker-Regular', color: 'gray' }}
          placeholderTextColor="gray"
          value={searchTerm}
          onChangeText={handleSearchInputChange}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Image
            source={require('../assets/Icons/Filter1.png')}
            style={{alignItems:'flex-end',marginTop: 15, marginLeft: 15,marginRight: 15}}
          />
        </TouchableOpacity>
      </View>
      <FlatList
  data={searchHistory}
  renderItem={({ item, index }) => (
    <View style={{marginLeft:scaleSize(20), marginRight:scaleSize(20)}}>
      <TouchableOpacity onPress={() => setSearchTerm(item)}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: 'black', paddingTop: scaleSize(20), paddingLeft:scaleSize(30),  paddingBottom:scaleSize(5)}}>{item}</Text>
          <TouchableOpacity onPress={() => deleteSearchItem(index)}>
            <Text style={{ color: 'gray', paddingRight: scaleSize(30) }}>X</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
     {index !== searchHistory.length - 1 && <View style={{ height: 1, backgroundColor: '#F6F6F6', paddingBottom:scaleSize(1) }} />} 
    </View>
  )}
  ListEmptyComponent={<Text>No search history</Text>}
/>

    </View>
  );
};

export default SearchBar;
