import React, {useCallback} from 'react';

import RootNavigator from './Navigation/RootNavigator';
// import {useFonts} from 'expo-font';

export default function App() {
  // const [fontsloaded] = useFonts({
  //   regular: require('./assets/fonts/Blinker-Regular.ttf'),
  //   bold: require('./assets/fonts/Blinker-Bold.ttf'),
  //   black: require('./assets/fonts/Blinker-Black.ttf'),
  //   extrabold: require('./assets/fonts/Blinker-ExtraBold.ttf'),
  //   extralight: require('./assets/fonts/Blinker-ExtraLight.ttf'),
  //   light: require('./assets/fonts/Blinker-Light.ttf'),
  //   semibold: require('./assets/fonts/Blinker-SemiBold.ttf'),
  //   thin: require('./assets/fonts/Blinker-Thin.ttf'),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsloaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsloaded]);

  // if (!fontsloaded) {
  //   return null;
  // }

  return <RootNavigator />;
}
