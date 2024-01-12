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
  dropdown: {
    width: width * 0.33,
    height: height * 0.044,
  },
  dropcontain: {height: height * 0.18, width: width * 0.33},
  input: {
    fontSize: 13,
    padding: width * 0.01,
    color: COLORS.black,
    height: height * 0.042,
  },
  date: {
    width: width * 0.05,
    height: height * 0.03,
    resizeMode: 'contain',
    marginHorizontal: width * 0.014,
    marginVertical: width * 0.007,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginVertical: height * 0.01,
    justifyContent: 'center',
  },

  rowbox: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginVertical: height * 0.01,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray20,
    marginLeft: width * 0.02,
    borderRadius: 5,
    textAlign: 'center',
  },
});
