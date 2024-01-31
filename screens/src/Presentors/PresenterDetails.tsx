
import * as React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView, View } from 'react-native';
import { Avatar, Headline, Subheading, Text, Title } from 'react-native-paper';
import { theme } from '../../navigation/Index';

type props = {
    navigation: any
}

const data =
{
    id: 1,
    name: 'Pujya Maa Dr. Hansaji Yogendra',
    image: 'https://internationalyogafestival.org/wp-content/uploads/2014/03/sadhvi-bhagawatiji.jpg',
    description: 'Dr. Hansaji Yogendra is a globally acclaimed Spiritual Yoga Guru and the Director of The Yoga Institute. She is a mentor and role model to millions of lives and has conducted more than 50,000 powerful sessions on Yoga, wellness, and mental health. Dr. Hansaji has enriched the world with her wisdom by authoring and co-authoring more than 100 books. \n\nAn epitome of grace and wisdom, she is a global symbol of peace, balanced living, and Yoga. Shei is on the board of multiple national and international committees in charge of devising Yoga syllabi and shaping Yoga policy worldwide. Using her profound knowledge and immense experience, she has designed special techniques, specific health and well-being camps, and unique sessions to transform the lives of people of all ages with varied life-related problems and ailments.\n\nDr. Hansaji was honored with the Bharat Gaurav Award at the House of Commons, British Parliament (2019), Woman of the Year Award (2000) by the American Biographical Institute, USA. Shaped under her leadership and guidance, The Yoga Institute received the prestigious PM Award in 2018.\n\nToday, Dr. Hansaji continues her mission of spreading the goodness of Yoga with the same vigor with which she began 50 years ago. She is today harnessing the power of social media, via Facebook, Instagram, and YouTube channel, to positively influence and transform the lives of millions of individuals across the globe and fill their lives with grace and light.',
    links: ['https://theyogainstitute.org/'],
    schedule: ''
}
const PresenterDetails: React.FC<props> = (props: props): JSX.Element => {

    return (<SafeAreaView style={{ backgroundColor: '#dcdcdc' }}>

        <ScrollView>
            <View>
                <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', padding: 16, marginTop: 10 }}>
                    <Avatar.Image style={{ margin: 16 }} size={150} source={{ uri: data.image }} />
                    <Title style={{ backgroundColor: 'white', padding: 16, color: theme.colors.primary }}>{data.name}</Title>

                    <Text style={{ flex: 1 }}>{data.description}</Text>
                </View>

                <Subheading style={{ backgroundColor: 'white', padding: 16, borderLeftWidth: 4, borderLeftColor: theme.colors.primary, color: theme.colors.primary }}>{data.links[0]}</Subheading>
            </View>
        </ScrollView>

    </SafeAreaView>)
}

export default PresenterDetails;