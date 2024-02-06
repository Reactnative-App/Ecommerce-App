import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
// import {StatusBar} from 'expo-status-bar';
import Icons from 'react-native-vector-icons/Ionicons';
import BackGround from '../assets/Profilebg.png';
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image} from 'react-native';
import {TextInput} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
//import ARROW_SVG from '../../assets/svg/Arrow.svg';
//import {scaleFont, scaleSize} from '../../Constants/Mixins';
import {HEIGHT, WIDTH, scaleFont, scaleSize} from '../Constants/Mixins';
import ARROW_SVG from '../assets/svg/Arrow.svg';
import {COLORS} from '../Constants/theme';
import IMG_PROFILE from '../assets/onboard4.png';
//import {COLORS} from '../../Constants/theme';
const EditProfile = (props) => {
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
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar barStyle={'dark-content'} />
      
        <View style={styles.main}>
          <View style={styles.cartHeader}>
            <TouchableOpacity>
              <Image
                source={require('../assets/Icons/Arrow.png')}
                onPress={() => props.navigation.goBack()}
              />
            </TouchableOpacity>
            <Text style={styles.centerTxt}>PROFILE</Text>
            <Image source={require('../assets/Icons/searchIcon.png')} />
          </View>

          <ImageBackground
            style={{width: '100%', aspectRatio: 1.6,  position: 'absolute', marginTop:scaleSize(20)}}
            resizeMode="cover"
            source={BackGround}>
            <View
              style={{marginTop:scaleSize(40),
                position: 'absolute',
                top: 50,
                height: 100,
                width: 100,
                borderRadius: 50,
                overflow: 'hidden',
                alignSelf: 'center',
              }}>
              <Image source={IMG_PROFILE} style={{height: 100, width: 100}} />

              <Pressable
                style={{
                  backgroundColor: '#F3D743',
                  height: scaleSize(25),
                  width: scaleSize(25),
                  position: 'absolute',
                  left: scaleSize(70),
                 // top: scaleSize(5),
                  borderRadius: scaleSize(40),
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 1,
                }}
                onPress={() => console.log('Camera')}>
                <Icons
                  name="camera"
                  size={scaleSize(14)}
                  color={COLORS.white}
                />
              </Pressable>
            </View>
          </ImageBackground>

          <View style={{marginBottom:scaleSize(20), marginTop:scaleSize(140),}}>
           <Text
              style={{
                fontSize: scaleFont(18),
                textAlign: 'center',
                color: '#000',
                fontFamily: 'Blinker-Regular',
              }}>
              Savannah Rathore
            </Text>
            <View
              style={{
                backgroundColor: '#F3D743',
                paddingVertical: scaleSize(4),
                paddingHorizontal: scaleSize(10),
                alignItems: 'center',
                marginTop: scaleSize(5),
                borderRadius: scaleSize(5),
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  fontSize: scaleFont(10),
                  color: '#000',
                  fontFamily: 'Blinker-Regular',
                }}>
                @Savannah92za
              </Text>
            </View>
          </View>
         
          <View style={styles.input}>
            <Image
              source={require('../assets/Icons/man.png')}
              style={{marginTop: 15, marginLeft: 15, marginRight: 15}}
            />
            <TextInput
        style={{ flex: 1, fontFamily: 'Blinker-Regular', color: 'gray' }}
      > Savannah
      </TextInput>
            <Image
              source={require('../assets/Icons/pen.png')}
              style={{alignItems:'flex-end',marginTop: 15, marginLeft: 15,marginRight: 15}}
            />
          </View>
        
          <View style={styles.input}>
            <Image
              source={require('../assets/Icons/Gen.png')}
              style={{marginTop: 15, marginLeft: 15, marginRight: 15}}
            />
            <TextInput
        style={{ flex: 1, fontFamily: 'Blinker-Regular', color: 'gray' }}
      > Savannah92
      </TextInput>
            <Image
              source={require('../assets/Icons/pen.png')}
              style={{alignItems:'flex-end',marginTop: 15, marginLeft: 15,marginRight: 15}}
            />
          </View>

          <View style={styles.input}>
            <Image
              source={require('../assets/Icons/cal.png')}
              style={{marginTop: 15, marginLeft: 15, marginRight: 15}}
            />
            <TextInput
        style={{ flex: 1, fontFamily: 'Blinker-Regular', color: 'gray' }}
      > Aug 21 1992
      </TextInput>
            <Image
              source={require('../assets/Icons/pen.png')}
              style={{alignItems:'flex-end',marginTop: 15, marginLeft: 15,marginRight: 15}}
            />
          </View>


          <View style={styles.input}>
            <Image
              source={require('../assets/Icons/phone.png')}
              style={{marginTop: 15, marginLeft: 15, marginRight: 15}}
            />
            <TextInput
        style={{ flex: 1, fontFamily: 'Blinker-Regular', color: 'gray' }}
      > 9812345678
      </TextInput>
            <Image
              source={require('../assets/Icons/pen.png')}
              style={{alignItems:'flex-end',marginTop: 15, marginLeft: 15,marginRight: 15}}
            />
          </View>

          <View style={styles.input}>
            <Image
              source={require('../assets/Icons/Email.png')}
              style={{marginTop: 15, marginLeft: 15, marginRight: 15}}
            />
            <TextInput
        style={{ flex: 1, fontFamily: 'Blinker-Regular', color: 'gray' }}
      >nathan.roberts@example.com
      </TextInput>
            <Image
              source={require('../assets/Icons/pen.png')}
              style={{alignItems:'flex-end',marginTop: 15, marginLeft: 15,marginRight: 15}}
            />
          </View>

          <View style={styles.input}>
            <Image
              source={require('../assets/Icons/Gen.png')}
              style={{marginTop: 15, marginLeft: 15, marginRight: 15}}
            />
            <TextInput
        style={{ flex: 1, fontFamily: 'Blinker-Regular', color: 'gray' }}
      > Female
      </TextInput>
            <Image
              source={require('../assets/Icons/pen.png')}
              style={{alignItems:'flex-end',marginTop: 15, marginLeft: 15,marginRight: 15}}
            />
          </View>

        </View>
   
      
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    // backgroundColor: '#fffdf6'
  },
  centerTxt: {
    fontSize: 12,
    fontFamily: 'Blinker-Regular',
    paddingVertical: 16 / 2,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#000',
    color: '#ffffff',
    alignSelf: 'flex-end',
  },
  cartHeader: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 60,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  input: {
    marginTop: 30,
    alignSelf: 'center',
    flexDirection: 'row',
    // backgroundColor: "#e9edf2,#FEFCF6",
    backgroundColor: 'white',
    height: 50,
    width: 325,
    borderRadius: 40,
    elevation: 4,
  },
});
