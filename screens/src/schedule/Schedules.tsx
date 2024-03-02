import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Subheading, Title } from 'react-native-paper';
import { theme } from '../../navigation/Index';
import NotificationDialog from './component/NotificationDialog';
import { formatTime } from '../../utils/DateFormatters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ApiService } from '../../utils/ApiServices';
 
const Schedules: React.FC = ({ navigagtion, route }: any) => {
  const [items, setItems] = useState<{ [key: string]: any }>({});
  const [selectedDate, setSelectedDate] = useState<string>('2024-03-08'); // State to hold the selected date
  const [isAdmin] = useState<boolean>(route?.params?.isAdmin)
  const [show, setShow] = useState<boolean>(false)
  const [data, setData] = useState<any>({})
  const [schedules, setSchedules] = useState<any>()

  useEffect(() => {
    getPresentrersSchedule();
  }, [])


  async function getPresentrersSchedule() {
    const resp: any = await ApiService.getData('/event/get');
    console.log('getPresentrersSchedule', resp);

    if (resp) {
      setSchedules(resp);
      // props.navigation.replace('Schedules', { isAdmin: true });
    }

  }

  async function updateSchedule(body: any) {

    const resp: any = await ApiService.updateData('/event/update', body);
    console.log('updateSchedule', resp);

    if (resp) {
      // props.navigation.replace('Schedules', { isAdmin: true });

      Alert.alert('Updates', 'Schedule Updated Successfully')
    }

  }


  const loadItems = (day: any) => {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Note: Month is 0-indexed

    // Check if the provided day belongs to the current month
    if (day.year === currentYear && day.month === currentMonth) {

      const selectedDate = day.dateString;
      setSelectedDate(selectedDate)
      dateSelected(selectedDate)
    }

  };


  function dateSelected(selectedDate: any) {
    const selectedItems = fetchItemsForDate(selectedDate); // Implement this function to fetch items based on the selected date
    const newItems: { [key: string]: any } = {};
    newItems[selectedDate] = selectedItems;
    setItems(newItems);
  }
  const fetchItemsForDate = (date: string) => {

    return schedules.filter((data: any) => moment(data.from_time).format('YYYY-MM-DD') === date);
  };

  function timeBetween(from_time: string, to_time: string) {

    return true;
  }

  const renderItem = (item: any) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginVertical: 16, padding: 16 }}>
      <View style={{ width: '90%' }}>
        <Title style={{ color: theme.colors.primary }}>{item?.name}</Title>
        <Subheading>{item?.presenter_name}</Subheading>

        <Subheading>{`Location : ${item?.place}`}</Subheading>
        <Subheading>{`TImeing : ${formatTime(item?.from_time)} - ${formatTime(item?.to_time)}`}</Subheading>

      </View>

      {isAdmin &&
        <TouchableOpacity
          style={{ width: '10%' }}
          onPress={() => {
            setData(item);
            setShow(!show)
          }}>
          <Icon name={'lead-pencil'} size={26} />
        </TouchableOpacity>}

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
        minDate={'2024-03-08'}
        maxDate={'2024-03-14'}
      />
      {show && <NotificationDialog
        visible={show}
        onSave={function (data: any): void {
          let index = schedules.findIndex((obj: any) => obj?.id === data?.id);

          if (index !== -1) {
            schedules[index] = data;
            setSchedules([...schedules]);
            dateSelected(selectedDate);
            updateSchedule(data)
          } else {
            // Handle case where id is not found
            console.log('Object with id not found');
          }
          setShow(false);
        }}
        eventData={data} />}
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
