import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

import {Colors, Fonts} from '../../assets/Theme';

const styles = StyleSheet.create({
  container: {
    width: '33.33%',
    height: '50%',
    backgroundColor: '#F5F7FB',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.tertiary,
    borderRightWidth: 2,
    borderRightColor: Colors.tertiary,
  },
  image: {width: 31.47, height: 32, resizeMode: 'contain'},
  texture: {
    color: Colors.black,
    marginTop: 10,
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 14,
  },
});

export default styles;
