import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Subheading, Title } from 'react-native-paper';
import { theme } from '../../navigation/Index';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParams } from '../../navigation/types';

interface Event {
    time: string;
    name: string;
    venue: string;
}

interface DateItem {
    date: string;
    events: Event[];
}


type props = {
    navigation: StackNavigationProp<HomeStackParams>
}
const Schedules2: React.FC<props> = (props: props): JSX.Element => {

    const [data, setData] = useState<DateItem[]>([]);
    const [selected, setSelected] = useState<string>('');

    useEffect(() => {
        // Mock data for demonstration
        const mockData: DateItem[] = [
            {
                date: '2024-02-29',
                events: [
                    { time: '08:00', name: 'Event 1', venue: 'Venue A' },
                    { time: '10:00', name: 'Event 2', venue: 'Venue B' },
                ],
            },
            {
                date: '2024-03-01',
                events: [
                    { time: '09:00', name: 'Event 3', venue: 'Venue C' },
                    { time: '12:00', name: 'Event 4', venue: 'Venue D' },
                ],
            },
        ];

        setData(mockData);
    }, []);

    function formatDate(date: any) {
        // const currentDateUtc = moment;
        // const formattedDateUtc = currentDateUtc.format('YYYY-MM-DD HH:mm:ss');

        return moment(date).format('DD-MM-YY, HH:mm A')
    }

    return (
        <FlatList
            scrollEnabled={false}
            data={data}
            keyExtractor={(item: any, index: number) => `${item.item}-${index}`}
            renderItem={({ item, index }: any) => <View style={{ backgroundColor: '#fff' }}>
                <TouchableOpacity onPress={() => item.date === selected ? setSelected('') : setSelected(item.date)} style={{ padding: 16, backgroundColor: theme.colors.light, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Title>{formatDate(item.date)}</Title>
                    <Icon name={item.date == selected ? "chevron-up" : 'chevron-down'} size={30} />

                </TouchableOpacity>
                <View style={{ padding: 8 }}>
                    {
                        item.date == selected ? item?.events?.map((data: any, index: number) => <View key={index} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Subheading>{data.name}</Subheading>
                            <Subheading>{data.venue}</Subheading>
                            <Subheading>{formatDate(data.time)}</Subheading>

                        </View>) : <></>
                    }
                </View>
            </View>} />
    )
};

export default Schedules2;
