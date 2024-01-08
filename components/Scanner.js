import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
// import { Camera } from "expo-camera";
import { HEIGHT, WIDTH, scaleFont, scaleSize } from "../Constants/Mixins";
import ARROW_SVG from "../assets/svg/Arrow_white.svg";
import FLASH_SVG from "../assets/svg/flash_white.svg";
import IMAGE_SVG from "../assets/svg/Image_white.svg";
import QR_SVG from "../assets/svg/qr_white.svg";
import { COLORS } from "../Constants/theme";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function Scanner(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <></>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <StatusBar
        style="light"
        // backgroundColor={COLORS.white_light}
        translucent
      />
      <View style={{}}>
        <View
          style={{
            flexDirection: "row",
            marginTop: scaleSize(50),
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ARROW_SVG
            height={scaleSize(20)}
            width={scaleSize(20)}
            style={{ marginLeft: scaleSize(20) }}
            onPress={() => navigation.goBack()}
          />
          <View
            style={{
              flex: 1,
              alignItems: "center",
              marginRight: scaleSize(50),
            }}
          >
            <View
              style={{
                backgroundColor: COLORS.white,
                paddingHorizontal: scaleSize(20),
                paddingVertical: scaleSize(5),
                borderRadius: 15,
              }}
            >
              <Text
                style={{
                  color: COLORS.black,
                  fontFamily: "regular",
                  fontSize: scaleFont(15),
                }}
              >
                SCAN QR CODE
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          // style={StyleSheet.absoluteFillObject}
          style={{
            //   flex: 1,
            width: WIDTH - scaleSize(50),
            alignSelf: "center",
            height: HEIGHT / 2.4,
            borderRadius: scaleSize(30),
            marginBottom: scaleSize(50),
            //   padding: scaleSize(10),
            //   backgroundColor: COLORS.black,
          }}
        />
      </View>
      {/* <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} /> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginHorizontal: scaleSize(25),
          marginBottom: scaleSize(20),
        }}
      >
        <TouchableOpacity style={{ alignItems: "center" }}>
          <FLASH_SVG />
          <Text
            style={{
              color: COLORS.white,
              fontFamily: "regular",
              fontSize: scaleFont(15),
            }}
          >
            On/Off Flash
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <IMAGE_SVG />
          <Text
            style={{
              color: COLORS.white,
              fontFamily: "regular",
              fontSize: scaleFont(15),
            }}
          >
            Choose QR Image
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <QR_SVG />
          <Text
            style={{
              color: COLORS.white,
              fontFamily: "regular",
              fontSize: scaleFont(15),
            }}
          >
            My QR Code
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
