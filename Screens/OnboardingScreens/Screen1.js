import { StyleSheet, Text, ImageBackground, View, TouchableOpacity, StatusBar,SafeAreaView } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { HEIGHT, WIDTH, scaleFont, scaleSize } from '../../Constants/Mixins';

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
       <StatusBar
          barStyle={'light-content'}
          translucent
          backgroundColor="#1F2120"
        />
      <View style={styles.topContainer}>
        <ImageBackground
          source={require('../../assets/onboard1.png')}
          style={styles.imageBackground}
        />
      </View>
   
      <LinearGradient start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#FDF9E1', '#F5DD67']}
        // style={styles.gradient}
         style={styles.bottomContainer}
         >
        <Text style={styles.text}>Your Style Store</Text>
        <View style={styles.textContainer}>
          <Text style={styles.bigText}>Dress Like</Text>
          <Text style={styles.bigText}>You Are Still</Text>
          <Text style={styles.bigText}>A Teen</Text>
        </View>
        <Text style={styles.smallText}>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 3,
    backgroundColor: '#000',
  },
  imageBackground: {
    height: scaleSize(500),
    width: WIDTH,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    height: scaleSize(360),
    width: WIDTH,
    borderTopLeftRadius: scaleSize(40),
    borderTopRightRadius: scaleSize(40),
    paddingTop:scaleSize(60),
  },
  text: {
    position: 'relative',
    bottom: scaleSize(35),
    left: scaleSize(30),
    alignSelf: 'flex-start',
    color: 'gray',
    fontFamily: 'Blinker-Light',
    fontSize: scaleFont(14),
  },
  textContainer: {
    marginTop: scaleSize(5),
    padding: scaleSize(10),
    marginLeft: scaleSize(20),
    position: 'relative',
    bottom: scaleSize(35),
    alignSelf: 'flex-start',
  },
  bigText: {
    fontSize: scaleFont(50),
    color: 'black',
    alignSelf: 'flex-start',
    fontFamily: 'Blinker-Light',
  },
  smallText: {
    color: 'gray',
    marginLeft: scaleSize(30),
    alignSelf: 'flex-start',
    fontSize: scaleFont(14),
    fontFamily: 'Blinker-Light',
    position: 'relative',
    bottom: scaleSize(35),
  },
  btn: {
    position: 'fixed',
    //top: scaleSize(10),
    left: '60%',
    width: scaleSize(122),
    height: scaleSize(40),
    padding: scaleSize(10),
    marginRight: scaleSize(20),
    backgroundColor: '#F3D743',
    borderRadius: scaleSize(20),
    Bottom: scaleSize(20),
    
  },
  btnText: {
    textAlign: 'center',
    color: '#000',
  },
//   gradient: {
//     width: '100%',
//     height: '100%',
//  },
});

export default Screen1;
