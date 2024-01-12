import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';
import styles from './styles';
import {data} from './../../constants';
import DropdownComponent from './../../component/dropdown/index';
import UserCart from './../../component/carts/userCart';
import DatePicker from 'react-native-date-picker';
import {formattedDateServer} from './../../services/date';

const {width, height} = Dimensions.get('window');
const Time = [
  {label: 'Morning', value: '1'},
  {label: 'After Noon', value: '2'},
  {label: 'Evening', value: '3'},
];
const Bus = ({navigation}) => {
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);
  const [visibletext, setVisibleText] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innerContainer}>
        <View style={styles.row}>
          <DropdownComponent
            placeholder="Morning"
            data={Time}
            dropdownStyle={styles.dropdown}
            containStyle={styles.dropcontain}
          />

          <View style={styles.rowbox}>
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
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.UserCartdata}
          renderItem={({item}) => (
            <UserCart
              name={item.name}
              driver={item.driver}
              image={item.image}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Bus;
