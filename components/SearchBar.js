import { View, TextInput, ActivityIndicator, FlatList, Image, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './SearchBar.style';
// import { SafeAreaView } from 'react-native-safe-area-context';
const API_ENDPOINT = `https://randomuser.me/api/?results=30`
import filter from 'lodash.filter'

const SearchBar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [fullData, setFullData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setIsLoading(true);
        fetchData(API_ENDPOINT);
    }, []);

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);

            console.log(json.results)
            setFullData(json.results)
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
            <TextInput
                placeholder='Search'
                clearButtonMode='always'
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.searchBox}
                onChangeText={(query) => handleSearch(query)}
            />

            <FlatList
                data={data}
                keyExtractor={(item) => item.login.username}
                renderItem={({ item }) => (
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: item.picture.thumbnail }} style={styles.image} />
                        <View>
                            <Text style={styles.txtName}>{item.name.first} {item.name.last}</Text>
                            <Text style={styles.txtEmail}>{item.email}</Text>
                        </View>
                    </View>
                )}
            />

        </View>

    )
}

export default SearchBar