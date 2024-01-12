import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import styles from './styles';
import {icons, images} from './../../constants';
import {data} from './../../constants';
import BusIdCart from './../../component/carts/BusidCart';
import BusDetail from './../busdetail/index';

const Home = ({navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.innerContainer}>
        {data.BusIdCartdata.map((item, index) => (
          <BusIdCart
            key={item.index}
            name={item.name}
            driver={item.driver}
            busNo={item.busNo}
            time={item.time}
            image={item.image}
            driverlocation={item.driverlocation}
            onPress={() => navigation.navigate('BusDetail')}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
