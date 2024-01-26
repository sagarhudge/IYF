import { Dimensions, FlatList, Image, NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { mainSliderArray, presenterData } from '../store/ArrayConst';
import { Avatar, Headline, Subheading } from 'react-native-paper';
import { theme } from '../navigation/Index';

const { width } = Dimensions.get("window");
const height = width * 0.6;

type iProps = {
    title: string,
    data: any
}
const PresentorsGrid = ({ title, data }: iProps) => {

    return (
        <FlatList
            ListHeaderComponent={<Headline style={{ padding: 16, fontWeight: '500', color: theme.colors.primary, backgroundColor: 'white' }}>{title}</Headline>
            }
            scrollEnabled={false}
            data={data}
            style={{ backgroundColor: 'white', flexGrow: 0 }}
            renderItem={({ item }) => (
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        margin: 10,
                        alignItems: 'center'
                    }}>
                    <Avatar.Image size={80} source={{ uri: item.image }} />
                    <Subheading style={{ marginVertical: 8 }}>{item.name}</Subheading>
                </View>
            )}
            numColumns={3}
        // keyExtractor={(item) => item.id}
        />

    );
};

export default PresentorsGrid;
