import React from 'react';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


type iPorps = {
  showPicker: any, title: string, onChangeTime: (time: Date | undefined, title: any) => void, time: Date, mode: any
}

const TimePickerOption: React.FC<iPorps> = ({ showPicker, title, onChangeTime, time, mode }: iPorps) => {

  const handleDateChange = (event: any, date: Date | undefined) => {
    if (date && event.type !== 'dismissed') {
      onChangeTime(date, title)
    }else{
      onChangeTime(undefined, '')

    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {showPicker && (
        <DateTimePicker
          minimumDate={new Date(8, 3, 2024)}
          maximumDate={new Date(14, 3, 2024)}
          testID="timePicker"
          value={time}
          mode={mode}
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

export default TimePickerOption;
