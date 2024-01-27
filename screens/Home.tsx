import { Dimensions, SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import Slider from './common/Slider';
import PresentorsGrid from './common/PresentorsGrid';
import { ScrollView } from 'react-native-gesture-handler';
import { presenterData, testimonials } from './store/ArrayConst';
import Testimonials from './common/Testimonials';
import { Avatar, Caption, Subheading, Title } from 'react-native-paper';
import { theme } from './navigation/Index';
import ImageCard from './common/ImageCard';

const { width } = Dimensions.get("window");
const height = width * 0.6;

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#dcdcdc' }}>
      <Slider />

      <ScrollView>

        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8, backgroundColor: 'white', borderBottomColor: 'gray', borderBottomWidth: 1, marginVertical: 16 }}>
          <Avatar.Image source={{ uri: 'https://internationalyogafestival.org/wp-content/uploads/2013/03/pujyaswamiji-150x150.jpg' }} />
          <View style={{ marginHorizontal: 16, width: "75%" }}>
            <Subheading style={{ color: 'black' }}>Blessings from Pujya Swamiji, President of Parmarth Niketan & Sadhvi Bhagawatiji, Director of IYF</Subheading>
          </View>
        </View>

        <PresentorsGrid title={'Presentors'} data={presenterData} />
        <Testimonials data={testimonials[0]} />
        <ImageCard></ImageCard>
      </ScrollView>
    </SafeAreaView>

  );
};

export default HomeScreen;
