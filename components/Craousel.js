import {View,Text,StyleSheet,Image} from 'react-native';
import React from 'react';
import styles from './Craousel.style';
import {SliderBox} from 'react-native-image-slider-box'
import { COLORS } from '../Constants/theme';

 const Craousel = () =>{
    const state = {
        images: [
           require('../assets/craousel_bg.png'),
           require('../assets/craousel_bg.png'),    
           require('../assets/craousel_bg.png'),        
        ]
      };

    return(

      <View>
      <View style={styles.craouselContainer}>

      <SliderBox
       images={state.images}
       sliderBoxHeight={200}
       dotColor="#f3d743"
       inactiveDotColor="#90A4AE"
       paginationBoxVerticalPadding={20}
       autoplay
       circleLoop
       resizeMethod={'resize'}
       resizeMode={'cover'}
       ImageComponentStyle={{borderRadius: 15, width: 325, marginTop: 25}}
       />
        <View style={styles.craouselText}>
        <Text style={styles.cslText}>summer collection</Text>
      </View>

      </View>
      <View style={styles.discountRow}>
       <View style={styles.discountBox}>

       <Text style={styles.disText}>Dicount{'\n'}Code</Text>
       <Text style={styles.disNum}>54</Text>
       </View>
       <View style={styles.offerBox}>
       <Text style={styles.offText}>Pending{'\n'}Offers</Text>
       <Text style={styles.offNum}>121</Text>
       </View>
       </View>
      </View>
    )
 }

 export default Craousel