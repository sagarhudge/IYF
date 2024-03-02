import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Dialog, Portal, Text, TextInput, Title } from 'react-native-paper';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import DateTimePickerScreen from './TimePickerOption';
import moment from 'moment';
import TimePickerOption from './TimePickerOption';


type iProps = {
    visible: boolean,
    onSave: () => void,
    eventData?: any
}

const NotificationDialog: React.FC<iProps> = ({ visible, onSave, eventData }: iProps) => {
    // const [visible, setVisible] = useState(false);
    const [startDate, setStartDate] = useState('08 03 2024');
    const [endDate, setEndDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [pickerTitle, setPickerTitle] = useState('start');

    const [mode, setMode] = useState('date');
    const [test, setText] = useState('Empty');

    function showMode(currentMode: any) {
        setMode(currentMode)
        setShowPicker(true);
    }


    function formatDates(date: any) {

        return moment(date).format('DD MM YYYY')

    }

    function formatTime(date: any) {

        return moment(date).format('DD MM YYYY HH:mm A')

    }


    const onChangeDate = (time: Date | undefined, title: string) => {

        setShowPicker(false);


        console.log('selectedDate', time, formatDates(time));

        if (mode == 'date') {
            setStartDate(formatDates(time));
            showMode('time');
        } else if (mode === 'time') {
            setMode('date');
            setStartDate(formatTime(time));
        }


    };

    function parseDate(dateStr: string) {
        // Split the date string into day, month, and year components
        const [day, month, year] = dateStr.split(' ');
        return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    }

    return <Portal>
        <Dialog visible={visible} onDismiss={() => onSave()}>
            <Dialog.Title>Schedule Event</Dialog.Title>
            <Dialog.Content>

                <TouchableOpacity onPress={() => { showMode('date') }}>
                    <Title>{startDate}</Title>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={() => { showMode('date'); }}>
                    <Title>{endDate()}</Title>
                </TouchableOpacity> */}

                <TimePickerOption
                    showPicker={showPicker}
                    mode={mode}
                    title={pickerTitle}
                    onChangeTime={onChangeDate}
                    time={parseDate(startDate)} />

            </Dialog.Content>
            <Dialog.Actions>
                <Button onPress={() => onSave()}>Cancel</Button>
                <Button onPress={() => onSave()}>Save</Button>
            </Dialog.Actions>
        </Dialog>
    </Portal>

};

export default NotificationDialog;
