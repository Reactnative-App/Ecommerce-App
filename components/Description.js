import { View, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";
import React from "react";
import styles from "./Description.style";
import ARROW_SVG from "../assets/svg/Arrow.svg";
import { WIDTH, scaleFont, scaleSize } from "../Constants/Mixins";
import IMG1_SVG from "../assets/svg/img1.svg"
import IMG2_SVG from "../assets/svg/img2.svg"
import IMG3_SVG from "../assets/svg/img3.svg"
import IMG4_SVG from "../assets/svg/img5.svg"
import IMG5_SVG from "../assets/svg/img5.svg"

const Description = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
               <View style={styles.arrw}>
                    <TouchableOpacity>
                        <ARROW_SVG
                            size={scaleSize(20)}
                            onPress={() => navigation.goBack()}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.descHeader}>
                    <Text style={styles.centerTxt}>
                        Description
                    </Text>
                </View>
                <View style={styles.descWrapper}>
                    <Text style={styles.description}>Information</Text>
                    <Text style={styles.descTxt}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </View>

                <View style={styles.horizontal}></View>

<View style={{ marginTop: scaleSize(22), marginHorizontal: scaleSize(22), }}>
    <Text style={styles.material}>Material</Text>
</View>
<View style={{ marginTop: scaleSize(15), marginHorizontal: scaleSize(22) }}>
    <Text style={styles.listTxt}> {' \u25CF Lorem Ipsum is simply dummy'}</Text>
    <Text style={styles.listTxt}> {' \u25CF printing and typesetting industry'}</Text>
    <Text style={styles.listTxt}> {' \u25CF Lorem Ipsum has been the industry'}</Text>
    <Text style={styles.listTxt}> {' \u25CF Lorem Ipsum has been the industry'}</Text>
</View>

<View style={{ marginTop: scaleSize(22), marginHorizontal: scaleSize(22),flexDirection:'row'}}>
<IMG1_SVG
                    size={scaleSize(20)}
                    style={{
                      marginLeft: scaleSize(10),
                    }}
                  />
                                    <IMG2_SVG
                    size={scaleSize(20)}
                    style={{
                      marginLeft: scaleSize(10),
                    }}
                  />
                                    <IMG3_SVG
                    size={scaleSize(20)}
                    style={{
                      marginLeft: scaleSize(10),
                    }}
                  />
                                    <IMG4_SVG
                    size={scaleSize(20)}
                    style={{
                      marginLeft: scaleSize(10),
                    }}
                  />
                                    <IMG5_SVG
                    size={scaleSize(20)}
                    style={{
                      marginLeft: scaleSize(10),
                    }}
                  />
</View>
        </SafeAreaView>
    );
};

export default Description;