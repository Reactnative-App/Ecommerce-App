import { StyleSheet, Text, View } from 'react-native'
import React,{useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import LoginWithEmail from '../Screens/LoginScreen/LoginWithEmail';
import CreateAccount from '../Screens/LoginScreen/CreateAccount';
import CreateProfile from '../Screens/LoginScreen/CreateProfile';
import ForgotPass from '../Screens/LoginScreen/ForgotPass';
import ForgotPassPhone from '../Screens/LoginScreen/ForgotPassPhone';
import VerificationCode from '../Screens/LoginScreen/VerificationCode';
import NewPass from '../Screens/LoginScreen/NewPass';
import HomeScreen from '../Screens/HomeScreen';
import Search from '../Screens/OnboardingScreens/Search';
import Profile from '../Screens/OnboardingScreens/Profile';
import BottomTabNavigation from './BottomTabNavigation';
import ProductDetails from '../components/ProductDetails';

const Stack = createNativeStackNavigator();


const RootNavigator = () => {
  const [isFirstLaunch, setisFirstLaunch] = useState(null);
  useEffect(() => {
      AsyncStorage.getItem("alreadyLaunched").then((val)=>{
        if(val ==null){
          AsyncStorage.setItem("alreadyLaunched", "true");
          setisFirstLaunch(true)
        }
        else{
          setisFirstLaunch(false)
        }
      })
  }, [])

  if(isFirstLaunch == null){
    return null;
  }
  else if(isFirstLaunch == true){
    return (
      <NavigationContainer>
         <Stack.Navigator>
         <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown:false}}/>
         <Stack.Screen name='Onboarding' component={OnboardingScreen} options={{headerShown:false}}/>
         <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
         </Stack.Navigator>
    </NavigationContainer>
    )
  }else {
    return(
      <NavigationContainer>
         <Stack.Navigator>
         <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown:false}}/>
         <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
         <Stack.Screen name='LoginWithEmail' component={LoginWithEmail} options={{headerShown:false}}/>
         <Stack.Screen name='CreateAccount' component={CreateAccount} options={{headerShown:false}}/>
         <Stack.Screen name='CreateProfile' component={CreateProfile} options={{headerShown:false}}/>
         <Stack.Screen name='ForgotPass' component={ForgotPass} options={{headerShown:false}}/>
         <Stack.Screen name='ForgotPass2' component={ForgotPassPhone} options={{headerShown:false}}/>
         <Stack.Screen name='VerifyCode' component={VerificationCode} options={{headerShown:false}}/>
         <Stack.Screen name='NewPass' component={NewPass} options={{headerShown:false}}/>
         <Stack.Screen name='HomeScreen' component={BottomTabNavigation} options={{headerShown:false}}/>
         <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
         <Stack.Screen name='Search' component={Search} options={{headerShown:false}}/>
         <Stack.Screen name='ProductDetails' component={ProductDetails} options={{headerShown:false}}/>
         <Stack.Screen name='BottomNavigation' component={BottomTabNavigation} options={{headerShown:false}}/>
         </Stack.Navigator>
    </NavigationContainer>
    )
  }
  
 
}

export default RootNavigator

const styles = StyleSheet.create({})