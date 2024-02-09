import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,StatusBar
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {StatusBar} from 'expo-status-bar';
import Icons from 'react-native-vector-icons/Ionicons';
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image} from 'react-native';
import {TextInput} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import ARROW_SVG from '../../assets/svg/Arrow.svg';
import {scaleFont, scaleSize} from '../../Constants/Mixins';
import {COLORS} from '../../Constants/theme';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CreateProfile = ({navigation}) => {
  const [imageUrl,setimageUrl] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    //console.warn("A date has been picked: ", date);
    setSelectedDate(moment(date).format('YYYY-MM-DD').split('T')[0]);
    hideDatePicker();
  };

  const onPickImageFromImageLibrary = async() => {
    const result = await launchImageLibrary();
    setimageUrl(result.assets[0].uri)
  }

  useEffect(()=>{},[imageUrl])

  // const onPickImageFromImageLibrary = () => {
  //   console.log('image library is clicked')
  // }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#FFFCF3" barStyle={'dark-content'} />
      <ScrollView
        // source={require("../../assets/Profilebg.png")}
        style={{backgroundColor: '#FBF9EF', marginTop: scaleSize(20)}}>
        <ARROW_SVG
          size={scaleSize(20)}
          style={{marginTop: scaleSize(30), marginLeft: scaleSize(30)}}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            marginLeft: scaleSize(30),
            marginTop: scaleSize(10),
            fontSize: scaleFont(32),
            fontFamily: 'Blinker-Light',
            color:'#000'
          }}>
          Setup Profile
        </Text>
        <View
          // source={require("../../assets/Profilebg.png")}
          style={{
            // backgroundColor: "#F4E8AE",
            // backgroundColor: "#FAF7EA",

            height: '60%',
            width: '60%',
            alignSelf: 'center',
          }}>
          <View style={{backgroundColor: '#FAF7EA'}}>
            <View
              style={{
                backgroundColor: 'white',
                height: scaleSize(84),
                width: scaleSize(84),
                marginTop: scaleSize(20),
                borderRadius: scaleSize(80),
                alignSelf: 'center',
                elevation: 8,
              }}>
              <Pressable
                style={{
                  backgroundColor: '#ffffff',
                  height: scaleSize(84),
                  width: scaleSize(84),
                  // position: 'absolute',
                  // left: scaleSize(50),
                  borderRadius: scaleSize(40),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress= {onPickImageFromImageLibrary}>
                <Icons
                  name="camera"
                  size={scaleSize(25)}
                  color='#F3D743'
                  style={{
                    position:'absolute',
                    top:5,
                    right:-5,
                    zIndex:1
                }}
                />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  // marginTop: 20,
                }}>
                {imageUrl && <Image style={{height: scaleSize(84), width: scaleSize(84),borderRadius:scaleSize(100),zIndex:0}} source={{uri:imageUrl}}/>}
              </View>
              </Pressable>
            </View>
          </View>

          <Text
            style={{
              marginTop: scaleSize(20),
              textAlign: 'center',
              fontSize: scaleFont(14),
              fontFamily: 'Blinker-Regular',
              color:'#000'
            }}>
            Choose Your Image
          </Text>

          <View style={styles.input}>
            <Image
              source={require('../../assets/Icons/man.png')}
              style={{marginTop: scaleSize(15), marginLeft: scaleSize(15), marginRight: scaleSize(15)}}
            />
            <TextInput
       placeholder="Full Name"
        style={{ flex: 1, fontFamily: 'Blinker-Regular', color: 'gray' }}
        placeholderTextColor="gray"
      />
          
          </View>
          <View style={styles.input}>
            <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
              <Image
                source={require('../../assets/Icons/cal.png')}
                style={{marginTop:scaleSize(15), marginLeft: scaleSize(15), marginRight: scaleSize(15)}}
              />
            </TouchableOpacity>
            <TextInput
        placeholder="Date of Birth"
        value={selectedDate}
        onChangeText={(text)=>setSelectedDate(text)}
        style={{ flex: 1, fontFamily: 'Blinker-Regular', color: 'gray' }}
        placeholderTextColor="gray"
      />
          </View>
          <View style={styles.input}>
            <Image
              source={require('../../assets/Icons/loc.png')}
              style={{marginTop: scaleSize(15), marginLeft: scaleSize(15), marginRight:scaleSize(15)}}
            />
            <TextInput
       placeholder="Region"
        style={{ flex: 1, fontFamily: 'Blinker-Regular', color: 'gray' }}
        placeholderTextColor="gray"
      />
          </View>
          <View style={styles.input}>
            <Image
              source={require('../../assets/Icons/Gen.png')}
              style={{marginTop:scaleSize(15), marginLeft: scaleSize(15), marginRight: scaleSize(15)}}
            />
            <TextInput
       placeholder="Gender"
        style={{ flex: 1, fontFamily: 'Blinker-Regular', color: 'gray' }}
        placeholderTextColor="gray"
      />
            <Image
              source={require('../../assets/Icons/pen.png')}
              style={{alignItems:'flex-end',marginTop: scaleSize(15), marginLeft: scaleSize(15),marginRight: scaleSize(15)}}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: scaleSize(130),
            }}>
            <Pressable
              style={[
                styles.btn,
                {width:scaleSize(90), marginRight:scaleSize(20), backgroundColor: '#fff', borderRadius:scaleSize(25)},
              ]}
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}>
              <Text style={{color: '#000', fontFamily: 'Blinker-Regular', textAlign: 'center'}}>Skip</Text>
            </Pressable>
            <Pressable  style={[styles.btn, {width: scaleSize(180), marginLeft: scaleSize(120),borderRadius:scaleSize(25)}]} onPress={() => {
                navigation.navigate('Login');
              }} >
              <Text style={{color: '#000', fontFamily: 'Blinker-Regular', textAlign: 'center'}}>
                Go To Shopping
              </Text>
            </Pressable>
          </View>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({
  input: {
    marginTop: scaleSize(30),
    alignSelf: 'center',
    flexDirection: 'row',
    // backgroundColor: "#e9edf2,#FEFCF6",
    backgroundColor: 'white',
    height: scaleSize(50),
    width: scaleSize(325),
    borderRadius: scaleSize(40),
    elevation: 4,
  },
  btn: {
    padding: scaleSize(15),
    backgroundColor: '#F3D743',
    borderRadius:scaleSize(20),
  },
});
