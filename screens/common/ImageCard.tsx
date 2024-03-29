import * as React from 'react';
import { Dimensions, Image, Linking, TouchableOpacity, View } from 'react-native';
import { Button, Chip, IconButton, Text } from 'react-native-paper';
import { theme } from '../navigation/Index';

const { width } = Dimensions.get("window");
// const height = width * 0.9;
const ImageCard = ({ data }: any) => (

    data?.map((data: any, index: number) => <View
        key={index}
        style={{ width, alignItems: 'center', padding: 16, backgroundColor: 'white', borderBottomColor: "gray", borderBottomWidth: 0.5 }}>

        {data?.pdf != '' && <IconButton
            style={{ position: 'absolute', top: 10, right: 10 }}
            icon="download"
            mode='outlined'
            iconColor={theme.colors.primary}
            size={20}
            onPress={() => { 
                 data?.pdf && Linking.openURL(data?.pdf) }}
        />}

        <Image
            style={{ width: 150, height: 170, resizeMode: 'contain' }}
            source={{ uri: data?.image }} />

        <View style={{ alignItems: 'center' }}>
            <Text style={{ marginTop: 16 }} variant="titleLarge">{data?.name}</Text>
            <Text variant="bodyMedium">{data?.description}</Text>

        </View>
        {(data?.linkOut || data?.linkInd) && <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 16 }}>

            {data?.linkOut != '' && <Chip style={{ marginRight: 10 }} onPress={() => Linking.openURL(data.linkOut)}>Purchanse here Non Ind</Chip>}
            {data?.linkInd != '' && <Chip onPress={() => Linking.openURL(data?.linkInd)}>Purchanse here Ind</Chip>}

        </View>}
    </View>)
);

export default ImageCard;