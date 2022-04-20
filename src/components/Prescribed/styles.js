import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

import {Colors, Fonts} from '../../assets/Theme';

const styles = StyleSheet.create({
  container: {paddingHorizontal: 20},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    color: '#434343',
    fontFamily: Fonts.RobotoBold,
    fontSize: 14,
  },

  //   Items

  itemcontainer: {
    width: 100,
    height: 134,
    backgroundColor: '#F5F7FB',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  itemImage: {width: 64, height: 64, resizeMode: 'contain'},
  itemText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
});

export default styles;
