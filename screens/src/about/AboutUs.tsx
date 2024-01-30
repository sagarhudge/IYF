
import * as React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';

type props = {
    navigation: any
}
const AboutUs: React.FC<props> = (props: props): JSX.Element => {

    return (<SafeAreaView>
        <Text>About Us</Text>
        <FlatList
            data={[]}
            keyExtractor={(item: any, index: number) => `${item.item}-${index}`}
            renderItem={({ item: any }) => <Text>About Us</Text>}
        />

    </SafeAreaView>)
}

export default AboutUs;