import {View,Text,StyleSheet} from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProductCartView from '../components/ProductCartView';
import BestSeller from '../components/BestSeller';

const Tab = createMaterialTopTabNavigator();


 const TopTabNavigation = () =>{
    return(
      <View style={{marginTop:20}}>
        <Tab.Navigator
              // tabBarOptions={{
              //   tabStyle: { backgroundColor: "transparent", elevation:0 },
              //   indicatorStyle: {
              //     borderBottomColor: "#F3D743",
              //     borderBottomWidth: 3,
              //   },
              // }}
        screenOptions={{
          tabBarActiveTintColor: '#000',
          tabBarLabelStyle: { fontSize: 14,fontFamily:'regular'},
          tabBarIndicatorStyle:{borderBottomColor: "#F3D743"},
          tabBarStyle: {
              backgroundColor: 'transparent',
              elevation:0,
              maxHeight: 50,
              justifyContent: 'center',
          }
      }}
        >
        <Tab.Screen name="ProductCartView" component={ProductCartView} />
        <Tab.Screen name="BestSeller" component={BestSeller} />
      </Tab.Navigator>
      </View>
    )
 }

 export default TopTabNavigation
