import { View, TextInput, ActivityIndicator, FlatList, Image, Text, Modal, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './SearchBar.style';
// import { SafeAreaView } from 'react-native-safe-area-context';
const API_ENDPOINT = `https://fakestoreapi.com/products`
import filter from 'lodash.filter'
import  FilterIcon  from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [fullData, setFullData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [modal, setModal] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        fetchData(API_ENDPOINT);
    }, []);

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);

            console.log(json)
            setFullData(json)
            setIsLoading(false)
        } catch (error) {
            setError(error);
            console.log(error);
        }
    }

    const handleSearch = (query) => {
        setSearchQuery(query)
        const formattedQuery = query.toLowerCase();
        const filteredData = filter(fullData, (user) => {
            return contains(user, formattedQuery);
        });
        setData(filteredData);
    }

    const contains = ({ name, email }, query) => {
        const { first, last } = name;
        if (first.includes(query) || last.includes(query) || email.includes(query)) {
            return true;
        }
        return false;
    }

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size={'large'} color='#5500dc' />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.ckInternet}>
                <Text>Error in fetching data... Please check your internet connection</Text>
            </View>
        );
    }

    return (

        <View style={styles.searchTop}>
            <View style={{
                  borderColor:'#ccc',
         borderWidth:1, borderRadius:8, flexDirection:"row", justifyContent:'space-between', alignItems:'center'}}>
            <TextInput
                placeholder='Search'
                clearButtonMode='always'
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.searchBox}
                onChangeText={(query) => handleSearch(query)}
            />
            <FilterIcon name='filter-outline' size={20} color='black' style={{marginEnd:10}} onPress={()=>setModal(!modal)} />

            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View>
                            <Text style={styles.txtName}>{item.title} </Text>
                            <Text style={styles.txtEmail}>{item.description}</Text>
                            <Text style={styles.txtCategory}>{item.category}</Text>
                            <Text style={styles.txtCategory}>{item.rating.rate}</Text>
                            <Text style={styles.txtCategory}>₹{item.price}</Text>
                        </View>
                    </View>
                )}
            />

<Modal
    animationType='slide'
    transparent={true}
     visible={modal}
     onRequestClose={()=>setModal(false)}
    >
    <View style={styles.modalView}>
        <TouchableOpacity style={styles.btn}>
            <Text>Low to High</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
            <Text> By Name</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
            <Text>By Price</Text>
        </TouchableOpacity>
     

     
    </View>
    
    </Modal>

        </View>

    )
}

export default SearchBar