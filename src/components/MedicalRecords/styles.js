import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

import {Colors, Fonts} from '../../assets/Theme';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginBottom: 50,
  },
  text: {
    color: '#434343',
    fontFamily: Fonts.PoppinsMedium,
    fontSize: 18,
    marginLeft: 8,
  },

  // Items
  ItemContainer: {
    height: 154,
    width: 100,
    backgroundColor: '#F5F7FB',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.tertiary,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  img: {width: 45, height: 45, resizeMode: 'contain'},
  itemText: {
    color: Colors.black,
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 14,
  },
});

export default styles;
