
import {Dimensions, PixelRatio} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = size => (WINDOW_WIDTH / guidelineBaseWidth) * size;
export const scaleFont = size => size * PixelRatio.getFontScale();

const FULL_SCREEN = Dimensions.get('screen');
export const WIDTH = FULL_SCREEN.width;
export const HEIGHT = FULL_SCREEN.height;









{/* <View style={styles.sizesRow}>
{COLORS.map((color, index) => (
  <TouchableOpacity
    key={index}
    onPress={() => setColor(color)}
    style={{
      width: 24,
      height: 24,
      backgroundColor: color,
      borderRadius: 44,
      margin: 5,
      borderWidth: selectedColor === color ? 2 : 0, // Add border for selected color
      borderColor: '#000',
    }}
  ></TouchableOpacity>
))}
</View> 
const COLORS = ['#08609C', '#AD63C2', '#DEAB3D', '#CD3B3B', '#FFE0D5'];

const [selectedSize, setSize] = useState(null);
  const [selectedColor, setColor] = useState(null);
*/}