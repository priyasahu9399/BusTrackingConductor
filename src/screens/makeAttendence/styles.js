import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants/index';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  maincontainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
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
    fontSize: 13,
    width: width * 0.5,
  },
  name: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 13,
    marginBottom: -2,
    width: width * 0.43,
  },
  input: {
    fontSize: 13,
    padding: width * 0.01,
    color: COLORS.black,

    marginLeft: width * 0.02,
  },
  date: {
    width: width * 0.05,
    height: height * 0.032,
    resizeMode: 'contain',
    marginHorizontal: width * 0.014,
    marginVertical: width * 0.007,
  },

  rowdate: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginVertical: height * 0.02,
    justifyContent: 'center',
    borderWidth: 1,
    height: height * 0.042,
    //  width: width * 0.25,
    borderColor: COLORS.gray20,
    borderRadius: 5,
    textAlign: 'center',
  },
  mainBox: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.gray20,
  },
  headingBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.07,
  },
  heading: {
    width: width * 0.49,
    textAlign: 'center',
    ...FONTS.sixHundred,
    color: COLORS.black,
    fontSize: 15,
  },
  borderRgt: {
    borderRightWidth: 1,
    borderColor: COLORS.gray20,
    height: height * 0.07,
  },
});
