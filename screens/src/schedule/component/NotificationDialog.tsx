import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button, Dialog, Portal, Subheading, TextInput } from 'react-native-paper';
import TimePickerOption from './TimePickerOption';
import Icon from 'react-native-vector-icons/Ionicons';
import { formatDates, formatTime } from '../../../utils/DateFormatters';


type iProps = {
    visible: boolean,
    onSave: (data: any) => void,
    eventData: any
}

const NotificationDialog: React.FC<iProps> = ({ visible, onSave, eventData }: iProps) => {

    const [data, setData] = useState<any>(eventData)
    const [showPicker, setShowPicker] = useState(false);
    const [pickerTitle, setPickerTitle] = useState('start');

    const [mode, setMode] = useState('date');

    function showMode(currentMode: any, title: string) {
        setMode(currentMode)
        setPickerTitle(title)
        setShowPicker(true);
    }



    const onChangeDate = (time: Date | undefined, title: string) => {

        setShowPicker(false);
        const newDate = time;

        // console.log('onChangeDate', time, '\n', newDate);

        if (time == undefined) {
            return;
        }

        if (mode == 'date') {

            if (title === 'start') {
                setData({ ...data, from_time: newDate })
            } else {
                setData({ ...data, to_time: newDate })
            }

            showMode('time', title);
        } else if (mode === 'time') {
            setMode('date');
            if (title === 'start') {
                setData({ ...data, from_time: newDate })
            } else {
                setData({ ...data, to_time: newDate })
            }
        }

    };


    return <Portal>
        <Dialog visible={visible} onDismiss={() => onSave(data)}>
            <Dialog.Title>Schedule Event</Dialog.Title>
            <Dialog.Content>

                <TextInput
                    label="Name"
                    value={data?.name}
                    onChangeText={(text) => setData(JSON.parse(JSON.stringify({ ...data, name: text })))}
                />
                <TextInput
                    label="Location"
                    value={data?.place}
                    onChangeText={(text) => setData({ ...data, place: text })}
                />
                <TextInput
                    label="Presenter"
                    value={data?.presenter_name}
                    onChangeText={(text) => setData({ ...data, presenter_name: text })}
                />

                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => { showMode('date', 'start') }}>
                    <Subheading>{'Start From'}</Subheading>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name={'calendar'} size={16} />
                        <Subheading style={{ marginLeft: 8 }}>{formatDates(data?.from_time)}</Subheading>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => { showMode('date', 'end'); }}>
                    <Subheading>{'End At'}</Subheading>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name={'calendar'} size={16} />
                        <Subheading style={{ marginLeft: 8 }}>{formatDates(data?.to_time)}</Subheading>
                    </View>
                </TouchableOpacity>

                <TimePickerOption
                    showPicker={showPicker}
                    mode={mode}
                    title={pickerTitle}
                    onChangeTime={onChangeDate}
                    time={pickerTitle == 'end' ? new Date(data.to_time) : new Date(data.from_time)} />

            </Dialog.Content>
            <Dialog.Actions>
                <Button onPress={() => onSave(undefined)}>Cancel</Button>
                <Button onPress={() => onSave(data)}>Save</Button>
            </Dialog.Actions>
        </Dialog>
    </Portal>

};

export default NotificationDialog;
