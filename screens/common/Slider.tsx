import { Dimensions, Image, NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { mainSliderArray } from '../store/ArrayConst';

const { width } = Dimensions.get("window");
const height = width * 0.6;

const Slider = () => {

    const [active, setActive] = useState(0);

    function onChange({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== active) {
            setActive(slide)
        }

    }

    return (


        <View style={{ height, width, alignItems: 'center' }}>
            <ScrollView pagingEnabled
                horizontal
                onScroll={onChange}
                style={{ width, height }}
                showsHorizontalScrollIndicator={false}>
                {
                    mainSliderArray.map((item: any, index: number) => {
                        return <Image
                            key={index}
                            source={{ uri: item.src }}
                            style={{ width, height, resizeMode: 'cover' }}
                        />

                    })
                }
            </ScrollView>
            <View style={{ backgroundColor: '#00000040', padding: 16, position: 'absolute', width }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>{mainSliderArray[active]?.message}</Text>

            </View>
            <View style={{ flexDirection: 'row' }}>
                {
                    mainSliderArray.map((k: any, i: number) => <Text key={i} style={{ color: i == active ? 'red' : 'gray' }}>⬤</Text>)
                }
            </View>

        </View>

    );
};

export default Slider;
