import { Dimensions, FlatList, Image, NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { mainSliderArray, presenterData } from '../store/ArrayConst';
import { Avatar, Caption, Card, Headline, IconButton, Subheading, Title } from 'react-native-paper';
import { theme } from '../navigation/Index';

const { width } = Dimensions.get("window");
const height = width * 0.6;

type iProps = {
    data: any
}
const Testimonials = ({ data }: iProps) => {

    return (

        data.map((data: any, index: number) => <View key={index} style={{ flexDirection: 'row', backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: 'gray' }}>
            <View style={{ width: 4, backgroundColor: theme.colors.primary, left: 0, marginRight: 8 }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
                <Avatar.Image source={{ uri: data.image ? data.image : 'https://static.vecteezy.com/system/resources/previews/000/642/975/original/quote-sign-icon-quotation-mark-vector.jpg' }} />
                <View style={{ marginHorizontal: 16, width: "75%" }}>
                    <Title numberOfLines={1} ellipsizeMode="tail" style={{ color: 'red' }}>{data?.name}</Title>
                    <Subheading style={{ color: 'gray' }}>{data?.description}</Subheading>
                </View>
            </View>
        </View>)



    );
};

export default Testimonials;
