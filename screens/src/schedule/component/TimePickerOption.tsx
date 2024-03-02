import React, { useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


type iPorps = {
  showPicker: any, title: string, onChangeTime: ( time: Date | undefined, title: any) => void, time: Date, mode: any
}

const TimePickerOption: React.FC<iPorps> = ({ showPicker, title, onChangeTime, time, mode }: iPorps) => {



  const handleDateChange = (event: any, date: Date | undefined) => {
    console.log('time------>', date)
    if (date) {
      onChangeTime(date, title)
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {showPicker && (
        <DateTimePicker
          minimumDate={new Date()}
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
