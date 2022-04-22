import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

import {Colors, Fonts} from '../../assets/Theme';

const styles = StyleSheet.create({
  container: {paddingHorizontal: 20},
  //   item
  itemCotnainer: {
    width: '100%',
    height: 87,
    backgroundColor: '#F5F7FB',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderRadius: 14,
    marginBottom: 10,
    paddingBottom: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  itemImage: {
    width: 136,
    resizeMode: 'contain',
    marginLeft: 20,
  },

  labelContainer: {
    backgroundColor: Colors.green,
    height: 30,
    alignContent: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: 'center',
  },
  labelText: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: 14,
    color: Colors.black,
  },
  btn: {
    backgroundColor: Colors.primary,
    width: 56,
    height: 21,
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#FFF',
    fontFamily: Fonts.RobotoRegular,
    fontSize: 9,
    textAlign: 'center',
  },
});

export default styles;
