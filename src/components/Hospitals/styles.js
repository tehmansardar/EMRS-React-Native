import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

import {Colors, Fonts} from '../../assets/Theme';

const styles = StyleSheet.create({
  container: {marginTop: 10, width: '90%'},
  hospitalContainer: {
    width: '100%',
    height: 302,
    backgroundColor: '#FFF',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
  },
  hospitalWrapper: {
    width: '100%',
    padding: 10,
  },
  imageBackground: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    paddingVertical: 30,
    alignItems: 'flex-end',
  },
  imageInnerWapper: {
    marginRight: 25,
    width: 50,
    height: 50,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  label: {
    height: 20,
    backgroundColor: Colors.blue,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  labelText: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: 12,
    textAlign: 'center',
  },
  info: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
    color: '#7B7B7B',
    fontFamily: Fonts.PoppinsMedium,
    fontSize: 14,
  },
  locationText: {
    color: '#666666',
    fontFamily: Fonts.PoppinsLight,
    fontSize: 12,
  },
  ratingReview: {flexDirection: 'row', alignItems: 'center'},
  reviewText: {
    color: '#B4B4B4',
    marginLeft: 5,
    fontFamily: Fonts.RobotoMedium,
    fontSize: 12,
  },
});

export default styles;
