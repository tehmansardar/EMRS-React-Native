import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

import {Colors, Fonts} from '../../assets/Theme';

const styles = StyleSheet.create({
  menus: {
    width: width - 30,
    height: 240,
    backgroundColor: Colors.white,
    marginTop: -120,
    borderRadius: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
});

export default styles;
