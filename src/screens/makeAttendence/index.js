import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';

import {COLORS, FONTS} from './../../constants';
import {images, icons} from './../../constants';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-date-picker';
import {formattedDateServer} from './../../services/date';
import {data} from './../../constants';
import styles from './styles';
import AttendenceCart from './../../component/carts/attendence';
const {width, height} = Dimensions.get('window');

const MakeAttendence = ({navigation}) => {
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);
  const [visibletext, setVisibleText] = useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.6, y: 1.0}}
        colors={['#A3B8ED', '#4AA4B8']}>
        <View style={styles.busimgbox}>
          <Image source={images.personimg} style={styles.busimg} />
        </View>
      </LinearGradient>

      <View style={styles.border}></View>
      <View style={[styles.innercontainer, styles.marginTop]}>
        <View style={styles.rowField}>
          <Text style={styles.headname}>Student name</Text>
          <Text style={styles.name}>Shiva bus</Text>
        </View>

        <View style={styles.rowField}>
          <Text style={styles.headname}>Student id</Text>
          <Text style={styles.name}>12345678</Text>
        </View>
        <View style={styles.rowField}>
          <Text style={styles.headname}>Timing</Text>
          <Text style={styles.name}>10:30 - 01:00 PM</Text>
        </View>
        <View style={styles.rowField}>
          <Text style={styles.headname}>Contact no</Text>
          <Text style={styles.name}>9876XXX764</Text>
        </View>

        <View style={styles.rowField}>
          <Text style={styles.headname}>Routes</Text>
          <Text numberOfLines={1} style={styles.name}>
            bhopal
          </Text>
        </View>

        <View>
          <View style={styles.rowdate}>
            {visibletext === true && (
              <TextInput editable={false} style={styles.input} value={date} />
            )}
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Image source={icons.date} style={styles.date} />
            </TouchableOpacity>
          </View>

          <DatePicker
            modal
            title="Select date"
            mode="date"
            open={open}
            date={new Date()}
            onConfirm={d => {
              setOpen(false);
              setDate(formattedDateServer(d));
              setVisibleText(true);
            }}
            onCancel={() => {
              setOpen(false);
            }}
            theme="light"
            textColor={COLORS.black}
          />
        </View>
      </View>
      <View style={styles.mainBox}>
        <View style={styles.headingBox}>
          <Text style={styles.heading}>Date</Text>
          <View style={styles.borderRgt}></View>
          <Text style={styles.heading}>Attendance</Text>
        </View>

        <FlatList
          data={data.AttendenceCartdata}
          renderItem={({item, index}) => (
            <AttendenceCart
              present={item.present}
              absent={item.absent}
              date={item.date}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default MakeAttendence;
