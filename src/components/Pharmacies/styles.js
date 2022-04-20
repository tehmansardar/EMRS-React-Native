import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

import {Colors, Fonts} from '../../assets/Theme';

const styles = StyleSheet.create({
  container: {paddingHorizontal: 20, paddingVertical: 10},
  //   item
  itemCotnainer: {
    width: '100%',
    backgroundColor: '#F5F7FB',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 14,
    borderWidth: 2,
    borderColor: Colors.white,
    marginBottom: 10,

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
    paddingHorizontal: 5,
    marginTop: 15,
  },
  labelText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 14,
    color: Colors.white,
  },
});

export default styles;
