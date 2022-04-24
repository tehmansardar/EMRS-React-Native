import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

import {Colors, Fonts} from '../../assets/Theme';

const styles = StyleSheet.create({
  scrollview: {flex: 1},

  background: {
    width: '100%',
    height: 280,
  },
  backgroundInner: {alignItems: 'center'},
  top_nav: {
    width: width - 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  top_navInner: {flexDirection: 'row', alignItems: 'center'},
  locationContainer: {marginLeft: 15},
  locationLabel: {
    color: '#BDBDBD',
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 14,
  },
  currentLocationText: {
    color: '#F2F2F2',
    fontFamily: Fonts.PoppinsMedium,
    fontSize: 14,
  },
  mainTitleContainer: {marginLeft: 10, marginTop: 70},
  mainTitle: {
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: 24,
    color: Colors.white,
  },

  // Input

  input: {
    borderWidth: 1,
    borderColor: '#0037B0',
    color: '#0037B0',
    paddingLeft: 25,
    height: 50,
    width: width - 30,
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: Colors.primary,
    width: width - 30,
    height: 57,
    justifyContent: 'center',
    borderRadius: 8,
  },
});

export default styles;
