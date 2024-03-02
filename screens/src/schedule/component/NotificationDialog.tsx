import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Dialog, Portal, Subheading, Text, TextInput, Title } from 'react-native-paper';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import DateTimePickerScreen from './TimePickerOption';
import moment from 'moment';
import TimePickerOption from './TimePickerOption';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../../../navigation/Index';


type iProps = {
    visible: boolean,
    onSave: () => void,
    eventData?: any
}

const NotificationDialog: React.FC<iProps> = ({ visible, onSave, eventData }: iProps) => {
    const [startDate, setStartDate] = useState('08 03 2024');
    const [endDate, setEndDate] = useState('08 03 2024');
    const [showPicker, setShowPicker] = useState(false);
    const [pickerTitle, setPickerTitle] = useState('start');

    const [mode, setMode] = useState('date');

    function showMode(currentMode: any, title: string) {
        setMode(currentMode)
        setPickerTitle(title)
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

        if (time == undefined) {
            return;
        }
        if (mode == 'date') {
            title === 'start' ? setStartDate(formatDates(time)) : setEndDate(formatDates(time))
            showMode('time', title);
        } else if (mode === 'time') {
            setMode('date');
            title === 'start' ? setStartDate(formatTime(time)) : setEndDate(formatTime(time))

        }

    };

    function parseDate(dateStr: string) {
        const [day, month, year] = dateStr.split(' ');
        return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    }

    return <Portal>
        <Dialog visible={visible} onDismiss={() => onSave()}>
            <Dialog.Title>Schedule Event</Dialog.Title>
            <Dialog.Content>

                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => { showMode('date', 'start') }}>
                    <Subheading>{'Start From'}</Subheading>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name={'calendar'} size={16} />

                        <Subheading style={{ marginLeft: 8 }}>{startDate}</Subheading>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => { showMode('date', 'end'); }}>
                    <Subheading>{'End At'}</Subheading>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name={'calendar'} size={16} />
                        <Subheading style={{ marginLeft: 8 }}>{endDate}</Subheading>
                    </View>
                </TouchableOpacity>

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
