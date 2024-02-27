import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../Screens/SplashScreen";
import OnboardingScreen from "../Screens/OnboardingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import LoginWithEmail from "../Screens/LoginScreen/LoginWithEmail";
import CreateAccount from "../Screens/LoginScreen/CreateAccount";
import CreateProfile from "../Screens/LoginScreen/CreateProfile";
import ForgotPass from "../Screens/LoginScreen/ForgotPass";
import ForgotPassPhone from "../Screens/LoginScreen/ForgotPassPhone";
import VerificationCode from "../Screens/LoginScreen/VerificationCode";
import NewPass from "../Screens/LoginScreen/NewPass";
import HomeScreen from "../Screens/HomeScreen";
import Search from "../Screens/OnboardingScreens/Search";
import Profile from "../Screens/OnboardingScreens/Profile";
import BottomTabNavigation from "./BottomTabNavigation";
import ProductDetails from "../components/ProductDetails";
import SearchBar from "../components/SearchBar";
import MenScreen from "../components/MenScreen";
import Description from "../components/Description";
import Reviews from "../components/Reviews";
import AddReviews from "../components/AddReviews";
import Checkout from "../components/Checkout";
import Address from "../components/Address";
import NewAddress from "../components/NewAddress";
import SetAddress from "../components/SetAddress";
import PaymentMethod from "../components/PaymentMethod";
import Account from "../components/Account";
import Notification from "../components/Notification";
import AddNewCard from "../components/AddNewCard";
import MyQRscan from "../components/MyQRscan";
import Scanner from "../components/Scanner";
import OrderSucess from "../components/OrderSucess";
import SearchScreen from "../components/SearchScreen";
import Cart from "../Screens/OnboardingScreens/Cart";
import WishList from "../Screens/OnboardingScreens/WishList";
import EditProfile from "../components/EditProfile";

// import EditProfile from "../components/EditProfile";
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [isFirstLaunch, setisFirstLaunch] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((val) => {
      if (val == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setisFirstLaunch(true);
      } else {
        setisFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch == true) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OrderSucess"
            component={OrderSucess}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginWithEmail"
            component={LoginWithEmail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateAccount"
            component={CreateAccount}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateProfile"
            component={CreateProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPass"
            component={ForgotPass}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPass2"
            component={ForgotPassPhone}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VerifyCode"
            component={VerificationCode}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewPass"
            component={NewPass}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={BottomTabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BottomNavigation"
            component={BottomTabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WishList"
            component={WishList}
            options={{ headerShown: false, presentation: "modal" }}
          />
          <Stack.Screen
            name="SearchBar"
            component={SearchBar}
            options={{ headerShown: false, presentation: "modal" }}
          />
          <Stack.Screen
            name="MenScreen"
            component={MenScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Description"
            component={Description}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Reviews"
            component={Reviews}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddReviews"
            component={AddReviews}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Address"
            component={Address}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewAddress"
            component={NewAddress}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SetAddress"
            component={SetAddress}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PaymentMethod"
            component={PaymentMethod}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddNewCard"
            component={AddNewCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyQRscan"
            component={MyQRscan}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Scanner"
            component={Scanner}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false }}
          />
           
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default RootNavigator;

const styles = StyleSheet.create({});
