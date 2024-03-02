import React, { useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


type iPorps = {
  showPicker: any, title: string, onChange: (date: any, title: any) => void, date: any
}

const DatePickerOption: React.FC<any> = ({ showPicker, title, onChange, date }: any) => {
  const [selectedDate, setSelectedDate] = useState<any>(new Date());

  const handleDateTimeChange = (event: any, selectedDateTime: Date | undefined | number) => {
    if (selectedDate) {
      setSelectedDate(selectedDateTime);
      onChange(selectedDateTime, title)
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {showPicker && (
        <DateTimePicker
          minimumDate={new Date()}
          testID="datePicker"
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateTimeChange}
        />
      )}
    </View>
  );
};

export default DatePickerOption;
