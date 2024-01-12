import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';

const {width, height} = Dimensions.get('window');

const AttendenceCart = ({date, present, absent}) => {
  const [show, setShow] = useState(true);
  return (
    <View style={styles.timeBox}>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.borderRgt}></View>
      <View>
        {present && <Text style={styles.timeing}>{present}</Text>}

        {show && absent && (
          <Text style={[styles.timeing, {color: '#FF0000'}]}>{absent}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.07,
    borderTopWidth: 1,
    borderColor: COLORS.gray20,
  },
  date: {
    width: width * 0.49,
    textAlign: 'center',
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 13,
    alignItems: 'center',
  },
  borderRgt: {
    borderRightWidth: 1,
    borderColor: COLORS.gray20,
    height: height * 0.07,
  },
  timeing: {
    width: width * 0.49,
    textAlign: 'center',
    ...FONTS.fiveHundred,
    color: '#17F448',
    fontSize: 13,
    marginBottom: -4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AttendenceCart;
