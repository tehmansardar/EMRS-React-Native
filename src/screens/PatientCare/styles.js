import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

import {Colors, Fonts} from '../../assets/Theme';

const styles = StyleSheet.create({
  scrollview: {flex: 1, height: height - 50},

  background: {
    width: '100%',
    height: 282,
    alignItems: 'center',
  },
  top_nav: {
    width: width - 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 84,
  },
  profileImg: {width: 50, height: 50, borderRadius: 50},

  // Menus

  // Health Monitor
  // Medical Records
});

export default styles;
