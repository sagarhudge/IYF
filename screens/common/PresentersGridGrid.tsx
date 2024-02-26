import { Dimensions, FlatList, Image, NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { mainSliderArray, presenterData } from '../store/ArrayConst';
import { Avatar, Headline, Subheading } from 'react-native-paper';
import { theme } from '../navigation/Index';

const { width } = Dimensions.get("window");
const height = width * 0.6;

type iProps = {
    title: string,
    data: any,
    navigation: any
}



const PresentersGrid = ({ title, data, navigation }: iProps) => {


    function webViewNavigate(payload: any, title: string) {

        navigation.navigate('WebViewScreen', { data: { item: payload, title: title } })

    }

    return (
        <FlatList
            scrollEnabled={false}
            data={data}
            style={{ backgroundColor: 'white', flexGrow: 0, paddingTop: 16 }}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => {
                        if (item?.PresenterPageURL) {
                            const data = { PresenterPageURL: item?.PresenterPageURL}

                            webViewNavigate(data, item?.name || '')
                        } else navigation?.navigate('PresentersList')
                    }}
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        margin: 10,
                        alignItems: 'center'
                    }}>
                    <Avatar.Image size={80} source={{ uri: item.image }} />
                    <Subheading style={{ marginVertical: 8 }}>{item.name}</Subheading>
                </TouchableOpacity>
            )}
            numColumns={2}
        // keyExtractor={(item) => item.id}
        />

    );
};

export default PresentersGrid;
