
import * as React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Avatar, Title } from 'react-native-paper';
import { theme } from '../../navigation/Index';
import { dataPresenter } from '../../store/PresentersData';


type props = {
    navigation: any
}



const PresentersList: React.FC<props> = (props: props): JSX.Element => {

    return (<SafeAreaView style={{ backgroundColor: '#dcdcdc' }}>

        <ScrollView>
            <View>
                <FlatList
                    scrollEnabled={false}
                    data={dataPresenter}
                    keyExtractor={(item: any, index: number) => `${item.item}-${index}`}
                    renderItem={({ item, index }) => item.Name === "" ? <Title style={{ padding: 16, color: theme.colors.primary }}>{item.header}</Title> : <TouchableOpacity
                        onPress={() => item.PresenterPageURL !== '' && props.navigation.navigate('WebViewScreen', { data: { item } })}
                    >
                        <View
                            style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', padding: 16, margin: 0.5 }}>
                            <Avatar.Image style={{ marginHorizontal: 16 }} size={70} source={{ uri: item.ImgURL }} />
                            <Title style={{ flex: 1 }}>{item.Name}</Title>
                        </View>
                    </TouchableOpacity>}
                />
            </View>
        </ScrollView>

    </SafeAreaView>)
}

export default PresentersList;