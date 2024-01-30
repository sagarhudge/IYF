
import * as React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';

type props = {
    navigation: any
}
const PresentorsList: React.FC<props> = (props: props): JSX.Element => {

    return (<SafeAreaView>
                <Text>Presentors List</Text>

        <FlatList
            data={[]}
            keyExtractor={(item: any, index: number) => `${item.item}-${index}`}
            renderItem={({ item: any }) => <Text>sdf</Text>}
        />

    </SafeAreaView>)
}

export default PresentorsList;