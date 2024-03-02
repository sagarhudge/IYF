import moment from 'moment';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Caption, Title } from 'react-native-paper';
import { theme } from '../../navigation/Index';
import NotificationDialog from './component/NotificationDialog';

const Schedules: React.FC = ({ navigagtion, route }: any) => {
  const [items, setItems] = useState<{ [key: string]: any }>({});
  const [selectedDate, setSelectedDate] = useState<string>('2024-03-08'); // State to hold the selected date
  const [isAdmin] = useState<boolean>(route?.params?.isAdmin||true)
  const [show, setShow] = useState<boolean>(false)

  const payload = [
    {
      "id": "7cdad0bd-db42-4622-9e45-30c70a2eba0a",
      "name": "Kundalini Sadhana",
      "from_time": "2024-03-08T04:00:00Z",
      "to_time": "2024-03-08T05:00:00Z",
      "place": "tent",
      "presenter_name": "Anshul Verma"
    },
    {
      "id": "46ccefe8-3a6e-4aec-adf6-af9ab5f837fe",
      "name": "Vedic Chanting",
      "from_time": "2024-03-08T06:00:00Z",
      "to_time": "2024-03-08T07:30:00Z",
      "place": "Satsang Hall",
      "presenter_name": "Sadhvi Ji"
    },
    {
      "id": "46adf78a-3eab-4b0f-972e-80963907c7ab",
      "name": "Life Management",
      "from_time": "2024-03-09T06:00:00Z",
      "to_time": "2024-03-09T07:30:00Z",
      "place": "Satsang Hall",
      "presenter_name": "Apoorv V"
    },
    {
      "id": "fb31b8dc-ee9e-43a5-a5a3-1788bee35936",
      "name": "Hath Yog",
      "from_time": "2024-03-09T06:00:00Z",
      "to_time": "2024-03-09T07:30:00Z",
      "place": "Yoga Hall",
      "presenter_name": "Baba Ramdev"
    }
  ]


  const loadItems = (day: any) => {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Note: Month is 0-indexed

    // Check if the provided day belongs to the current month
    if (day.year === currentYear && day.month === currentMonth) {
 
      const selectedDate = day.dateString;
      setSelectedDate(selectedDate)
      const selectedItems = fetchItemsForDate(selectedDate, day); // Implement this function to fetch items based on the selected date
      const newItems: { [key: string]: any } = {};
      newItems[selectedDate] = selectedItems;
      setItems(newItems);
    }

  };
  const fetchItemsForDate = (date: string, day: any) => {

    return payload.filter((data: any) => moment(data.from_time).utc().format('YYYY-MM-DD') === date);
  };

  function timeBetween(from_time: string, to_time: string) {
    const currentTime = moment().utc().format('HH:mm A');
    // Example from_time and to_time from your 'item'
    const fromTime = moment(from_time).utc().format('HH:mm A');
    const toTime = moment(to_time).utc().format('HH:mm A');
    // Check if the current time falls within the range
    const isBetween = moment(currentTime, 'HH:mm A').utc().isBetween(fromTime, toTime);
    return isBetween;
  }

  const renderItem = (item: any) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: !timeBetween(item.from_time, item.to_time) ? theme.colors.light : '#fff', marginVertical: 16, padding: 16 }}>
      <Text>{item.icon}</Text>
      <View style={{ marginHorizontal: 26 }}>
        <Title>{item.presenter_name}</Title>
        <Caption>{`${moment(item.from_time).utc().format('HH:mm A')} - ${moment(item.to_time).utc().format('HH:mm A')}`}</Caption>
        <Caption>{item.place}</Caption>
      </View>

      {isAdmin && <TouchableOpacity onPress={() => setShow(!show)}><Text>Edit</Text></TouchableOpacity>}

    </View>
  );

  const renderEmptyDate = () => (
    <View style={styles.emptyDate}>
      <Title>No events for this day</Title>
    </View>
  );

  // const rowHasChanged = (r1: any, r2: any) => r1.name !== r2.name;

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={selectedDate}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        minDate={'2024-03-07'}
        maxDate={'2024-03-15'}
      />
      <NotificationDialog
        visible={show}
        onSave={function (): void {
          setShow(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyDate: {
    // height: 15,
    flex: 1,
    padding: 16,
    marginRight: 10,
    marginTop: 37,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});

export default Schedules;
