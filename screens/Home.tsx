import { Dimensions, SafeAreaView, View } from 'react-native';
import React from 'react';
import Slider from './common/Slider';
import PresentorsGrid from './common/PresentorsGrid';
import { ScrollView } from 'react-native-gesture-handler';
import { aboutIYF, booksCar, presenterData, purchase, testimonials } from './store/ArrayConst';
import Testimonials from './common/Testimonials';
import { Avatar, Headline, Subheading } from 'react-native-paper';
import ImageCard from './common/ImageCard';
import { theme } from './navigation/Index';


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


        <View>
          <Subheading style={{ textAlign: 'center', backgroundColor: 'white', color: theme.colors.primary,paddingVertical:16 }}>A Celebration of the Joy of Yoga at the International Yoga Festival</Subheading>
          <PresentorsGrid title={''} data={aboutIYF} />
        </View>


        <View style={{ marginTop: 16,backgroundColor:'white' }}>
          <Headline style={{marginHorizontal:16,marginVertical:20}}>Learn About IYF 2023!</Headline>
          <ImageCard data={booksCar} />
        </View>

        <View style={{ marginTop: 16,backgroundColor:'white' }}>
         <Headline style={{marginHorizontal:16,marginVertical:20}}>Drops of Inspiration</Headline>
          <ImageCard data={purchase} />


        </View>
        <View style={{ marginTop: 16,backgroundColor:'white' }}>
         <Headline style={{marginHorizontal:16,marginVertical:20}}>Testimonials</Headline>

         <Testimonials data={testimonials} />
        </View>



      </ScrollView>
    </SafeAreaView>

  );
};

export default HomeScreen;
