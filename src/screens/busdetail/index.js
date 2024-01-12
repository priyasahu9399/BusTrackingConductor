import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import styles from './styles';
import {icons, images} from './../../constants';
import Journey from './../journey/index';
import MakeAttendence from './../makeAttendence/index';

const {width, height} = Dimensions.get('window');

const BusDetail = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />

      <View style={styles.busimgbox}>
        <Image source={images.blackbus} style={styles.busimg} />
      </View>
      <View style={styles.border}></View>
      <View style={styles.innerContainer}>
        <View style={styles.marginTop}>
          <View style={styles.rowField}>
            <Text style={styles.headname}>Owner name</Text>
            <Text style={styles.name}>Shiva bus</Text>
          </View>

          <View style={styles.rowField}>
            <Text style={styles.headname}>Driver name</Text>
            <Text style={styles.name}>Shiva</Text>
          </View>

          <View style={styles.rowField}>
            <Text style={styles.headname}>Conductor name</Text>
            <Text style={styles.name}>Navin kumar</Text>
          </View>

          <View style={styles.rowField}>
            <Text style={styles.headname}>Routes</Text>
            <Text numberOfLines={1} style={styles.name}>
              bhopal
            </Text>
          </View>
          <View style={styles.rowField}>
            <Text style={styles.headname}>Time</Text>
            <Text style={styles.name}>10:30 - 01:00 PM</Text>
          </View>
        </View>
        <View style={styles.redbox}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MakeAttendence')}>
            <Text style={styles.orangeText}>Make attendance today</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.orangeText}>View student attendance</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Journey')}>
            <Text style={styles.orangeText}>Start journey</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BusDetail;
