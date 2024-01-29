import {Dimensions, PixelRatio} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = size => (WINDOW_WIDTH / guidelineBaseWidth) * size;
export const scaleFont = size => size * PixelRatio.getFontScale();

const FULL_SCREEN = Dimensions.get('screen');
export const WIDTH = FULL_SCREEN.width;
export const HEIGHT = FULL_SCREEN.height;