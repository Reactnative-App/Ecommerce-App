import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import React from 'react';
import styles from './SearchBar.style';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchBar = () => {
    return (
   
          <View style={styles.searchBox}>
                <TextInput
                    placeholder='Search'
                    clearButtonMode='always'
                    style={styles.searchBox}
                />
            </View>
     
    )
}

export default SearchBar