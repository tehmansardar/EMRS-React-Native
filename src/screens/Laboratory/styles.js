import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

import {Colors, Fonts} from '../../assets/Theme';

const styles = StyleSheet.create({
  scrollview: {flex: 1},

  background: {
    width: '100%',
    height: 230,
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
  mainTitleContainer: {marginLeft: 10, marginTop: 15},
  mainTitle: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: 36,
    color: Colors.white,
  },
});

export default styles;
