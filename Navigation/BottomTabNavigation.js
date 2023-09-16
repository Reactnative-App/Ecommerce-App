import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Screens/OnboardingScreens/Profile';
import HomeScreen from '../Screens/HomeScreen';
import Search from '../Screens/OnboardingScreens/Search';
import Wishlist from '../Screens/OnboardingScreens/WishList';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../Constants/theme';


const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 70
    }
}

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? "home" : "home-outline"}
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2}
                        />
                    }
                }}
            />

            <Tab.Screen name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? "person" : "person-outline"}
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2}
                        />
                    }
                }}
            />

            <Tab.Screen name='Search'
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={"search-sharp"}
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2}
                        />
                    }
                }}
            />

           <Tab.Screen name='Wishlist'
                component={Wishlist}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? "star" : "star-outline"}
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2}
                        />
                    }
                }}
            />




        </Tab.Navigator>
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})