import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants/index';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innerContainer: {
    backgroundColor: COLORS.white,
    width: width * 0.92,
    alignSelf: 'center',
  },
  busimg: {
    resizeMode: 'contain',
    width: width * 0.9,
    height: height * 0.25,
  },
  busimgbox: {
    width: width,
    height: height * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderTopWidth: 1,
    borderColor: COLORS.gray20,
  },
  rowField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.01,
  },
  marginTop: {
    marginTop: height * 0.03,
  },
  headname: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 14,
    width: width * 0.5,
  },
  name: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 14,
    marginBottom: -2,
    width: width * 0.43,
  },
  orangeText: {
    ...FONTS.fiveHundred,
    color: COLORS.primary,
    fontSize: 14,
    marginTop: height * 0.012,
  },
  redbox: {marginVertical: height * 0.015, width: width * 0.6},
});
