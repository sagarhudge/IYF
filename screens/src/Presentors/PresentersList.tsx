
import * as React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Avatar, Headline, Text, Title } from 'react-native-paper';
import { theme } from '../../navigation/Index';

type props = {
    navigation: any
}

const data = [
    {
        id: 1,
        name: 'Pujya Maa Dr. Hansaji Yogendra',
        image: 'https://internationalyogafestival.org/wp-content/uploads/2014/03/sadhvi-bhagawatiji.jpg',
        description: 'Dr. Hansaji Yogendra is a globally acclaimed Spiritual Yoga Guru and the Director of The Yoga Institute. She is a mentor and role model to millions of lives and has conducted more than 50,000 powerful sessions on Yoga, wellness, and mental health. Dr. Hansaji has enriched the world with her wisdom by authoring and co-authoring more than 100 books. \n\nAn epitome of grace and wisdom, she is a global symbol of peace, balanced living, and Yoga. Shei is on the board of multiple national and international committees in charge of devising Yoga syllabi and shaping Yoga policy worldwide. Using her profound knowledge and immense experience, she has designed special techniques, specific health and well-being camps, and unique sessions to transform the lives of people of all ages with varied life-related problems and ailments.\n\nDr. Hansaji was honored with the Bharat Gaurav Award at the House of Commons, British Parliament (2019), Woman of the Year Award (2000) by the American Biographical Institute, USA. Shaped under her leadership and guidance, The Yoga Institute received the prestigious PM Award in 2018.\n\nToday, Dr. Hansaji continues her mission of spreading the goodness of Yoga with the same vigor with which she began 50 years ago. She is today harnessing the power of social media, via Facebook, Instagram, and YouTube channel, to positively influence and transform the lives of millions of individuals across the globe and fill their lives with grace and light.',
        links: ['https://theyogainstitute.org/'],
        schedule: ''
    },
    {
        id: 2,
        name: 'Pujya Maa Dr. Hansaji Yogendra',
        image: 'https://internationalyogafestival.org/wp-content/uploads/2014/03/sadhvi-bhagawatiji.jpg',
        description: 'Dr. Hansaji Yogendra is a globally acclaimed Spiritual Yoga Guru and the Director of The Yoga Institute. She is a mentor and role model to millions of lives and has conducted more than 50,000 powerful sessions on Yoga, wellness, and mental health. Dr. Hansaji has enriched the world with her wisdom by authoring and co-authoring more than 100 books. \n\nAn epitome of grace and wisdom, she is a global symbol of peace, balanced living, and Yoga. Shei is on the board of multiple national and international committees in charge of devising Yoga syllabi and shaping Yoga policy worldwide. Using her profound knowledge and immense experience, she has designed special techniques, specific health and well-being camps, and unique sessions to transform the lives of people of all ages with varied life-related problems and ailments.\n\nDr. Hansaji was honored with the Bharat Gaurav Award at the House of Commons, British Parliament (2019), Woman of the Year Award (2000) by the American Biographical Institute, USA. Shaped under her leadership and guidance, The Yoga Institute received the prestigious PM Award in 2018.\n\nToday, Dr. Hansaji continues her mission of spreading the goodness of Yoga with the same vigor with which she began 50 years ago. She is today harnessing the power of social media, via Facebook, Instagram, and YouTube channel, to positively influence and transform the lives of millions of individuals across the globe and fill their lives with grace and light.',
        links: ['https://theyogainstitute.org/'],
        schedule: ''
    },

    {
        id: 3,
        name: 'Pujya Maa Dr. Hansaji Yogendra',
        image: 'https://internationalyogafestival.org/wp-content/uploads/2014/03/sadhvi-bhagawatiji.jpg',
        description: 'Dr. Hansaji Yogendra is a globally acclaimed Spiritual Yoga Guru and the Director of The Yoga Institute. She is a mentor and role model to millions of lives and has conducted more than 50,000 powerful sessions on Yoga, wellness, and mental health. Dr. Hansaji has enriched the world with her wisdom by authoring and co-authoring more than 100 books. \n\nAn epitome of grace and wisdom, she is a global symbol of peace, balanced living, and Yoga. Shei is on the board of multiple national and international committees in charge of devising Yoga syllabi and shaping Yoga policy worldwide. Using her profound knowledge and immense experience, she has designed special techniques, specific health and well-being camps, and unique sessions to transform the lives of people of all ages with varied life-related problems and ailments.\n\nDr. Hansaji was honored with the Bharat Gaurav Award at the House of Commons, British Parliament (2019), Woman of the Year Award (2000) by the American Biographical Institute, USA. Shaped under her leadership and guidance, The Yoga Institute received the prestigious PM Award in 2018.\n\nToday, Dr. Hansaji continues her mission of spreading the goodness of Yoga with the same vigor with which she began 50 years ago. She is today harnessing the power of social media, via Facebook, Instagram, and YouTube channel, to positively influence and transform the lives of millions of individuals across the globe and fill their lives with grace and light.',
        links: ['https://theyogainstitute.org/'],
        schedule: ''
    }, {
        id: 4,
        name: 'Pujya Maa Dr. Hansaji Yogendra',
        image: 'https://internationalyogafestival.org/wp-content/uploads/2014/03/sadhvi-bhagawatiji.jpg',
        description: 'Dr. Hansaji Yogendra is a globally acclaimed Spiritual Yoga Guru and the Director of The Yoga Institute. She is a mentor and role model to millions of lives and has conducted more than 50,000 powerful sessions on Yoga, wellness, and mental health. Dr. Hansaji has enriched the world with her wisdom by authoring and co-authoring more than 100 books. \n\nAn epitome of grace and wisdom, she is a global symbol of peace, balanced living, and Yoga. Shei is on the board of multiple national and international committees in charge of devising Yoga syllabi and shaping Yoga policy worldwide. Using her profound knowledge and immense experience, she has designed special techniques, specific health and well-being camps, and unique sessions to transform the lives of people of all ages with varied life-related problems and ailments.\n\nDr. Hansaji was honored with the Bharat Gaurav Award at the House of Commons, British Parliament (2019), Woman of the Year Award (2000) by the American Biographical Institute, USA. Shaped under her leadership and guidance, The Yoga Institute received the prestigious PM Award in 2018.\n\nToday, Dr. Hansaji continues her mission of spreading the goodness of Yoga with the same vigor with which she began 50 years ago. She is today harnessing the power of social media, via Facebook, Instagram, and YouTube channel, to positively influence and transform the lives of millions of individuals across the globe and fill their lives with grace and light.',
        links: ['https://theyogainstitute.org/'],
        schedule: ''
    }
]
const PresentersList: React.FC<props> = (props: props): JSX.Element => {

    return (<SafeAreaView style={{ backgroundColor: '#dcdcdc' }}>

        <ScrollView>
            <View>
                <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, marginTop: 10 }}>
                    <Avatar.Image style={{ marginHorizontal: 16 }} size={80} source={{ uri: 'https://internationalyogafestival.org/wp-content/uploads/2013/03/pujyaswamiji.jpg' }} />
                    <Text style={{ flex: 1 }}>It is a great joy to welcome so many revered saints and respected yogacharyas to the International Yoga Festival. This week, all of the participants will receive not only the gift of their wonderful teachings, but also the gift of their divine touch, through which all will be transformed.</Text>
                </View>
                <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, marginVertical: 10 }}>
                    <Text style={{ flex: 1 }}>The renowned presenters at IYF bring not only the best of strength and flexibility through asana, but they also bring the depth and breadth of yogic philosophy and spiritual wisdom for true alignment of body, mind, heart, spirit and connection of the self to the Divine!</Text>
                    <Avatar.Image style={{ marginHorizontal: 16 }} size={80} source={{ uri: 'https://internationalyogafestival.org/wp-content/uploads/2014/03/sadhvi-bhagawatiji.jpg' }} />
                </View>
                <FlatList
                    scrollEnabled={false}
                    ListHeaderComponent={<Title style={{ marginBottom: 16, marginHorizontal: 16, color: theme.colors.primary }}>IYF 2024 Revered Saints, Spiritual Masters and Yogacharyas</Title>}
                    data={[...data, ...data]}
                    // ItemSeparatorComponent={() => (
                    //     <View style={{ backgroundColor: "gray", height: 1 }} />
                    // )}
                    keyExtractor={(item: any, index: number) => `${item.item}-${index}`}
                    renderItem={({ item, index }) => <TouchableOpacity
                        onPress={() => props.navigation.navigate('PresenterDetails', { data: { item } })}
                    >
                        <View
                            style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', padding: 16,margin:0.5 }}>
                            <Avatar.Image style={{ marginHorizontal: 16 }} size={70} source={{ uri: item.image }} />
                            <Title style={{ flex: 1 }}>{item.name}</Title>
                        </View>
                    </TouchableOpacity>}
                />
            </View>
        </ScrollView>

    </SafeAreaView>)
}

export default PresentersList;