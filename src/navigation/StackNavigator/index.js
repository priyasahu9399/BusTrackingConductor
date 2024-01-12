import React from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {images, icons} from '../../constants';
import {FONTS, COLORS, SIZES} from './../../constants/theme';
import BottomTab from './../BottomTabNavigator/index';
import styles from './styles';
import Journey from './../../screens/journey/index';
import BusDetail from './../../screens/busdetail/index';
import MakeAttendence from "./../../screens/makeAttendence/index";

const {width, height} = Dimensions.get('window');

const Stack = createStackNavigator();

const StackScreen = ({navigation, route}) => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen name="Journey" component={Journey} />
      <Stack.Screen
        name="BusDetail"
        component={BusDetail}
        options={{
          title: 'Details',
        }}
      />
      <Stack.Screen
        name="MakeAttendence"
        component={MakeAttendence}
        options={{
          title: 'Add Attendence',
        }}
      />

    </Stack.Navigator>
  );
};

export default StackScreen;
