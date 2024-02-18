import { Alert, Dimensions, SafeAreaView, View } from 'react-native';
import React, { useEffect } from 'react';
import Slider from './common/Slider';
import { ScrollView } from 'react-native-gesture-handler';
import { aboutIYF, booksCar, presenterData, purchase, testimonials } from './store/ArrayConst';
import Testimonials from './common/Testimonials';
import { Avatar, Button, Headline, Subheading } from 'react-native-paper';
import ImageCard from './common/ImageCard';
import { theme } from './navigation/Index';
import { Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParams } from './navigation/types';
import PresentersGrid from './common/PresentersGridGrid';
import { PermissionsAndroid } from 'react-native';
import { onDisplayNotification } from './utils/Notification';

const { width } = Dimensions.get("window");
const height = width * 0.9;


type props = {
  navigation: StackNavigationProp<HomeStackParams>
}

useEffect(() => {
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

}, [])

const HomeScreen: React.FC<props> = (props: props): JSX.Element => {


  const applyHorizontalScroll = (child: any): any => {
    return <ScrollView
      pagingEnabled
      horizontal
      persistentScrollbar={true}
      style={{ width }}
      contentContainerStyle={{ backgroundColor: 'red' }}
      showsHorizontalScrollIndicator={true}>

      {child}
    </ScrollView>
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#dcdcdc' }}>


      <ScrollView>

        <Slider />
        {/* Quote */}
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8, backgroundColor: 'white', borderBottomColor: 'gray', borderBottomWidth: 1, marginVertical: 16 }}>
          <Avatar.Image source={{ uri: 'https://internationalyogafestival.org/wp-content/uploads/2013/03/pujyaswamiji-150x150.jpg' }} />
          <View style={{ marginHorizontal: 16, width: "75%" }}>
            <Subheading style={{ color: 'black' }}>Blessings from Pujya Swamiji, President of Parmarth Niketan & Sadhvi Bhagawatiji, Director of IYF</Subheading>
          </View>
        </View>

        {/* adverisement */}
        <View>
          <Image style={{ width, height: 90, paddingHorizontal: 16 }} source={{ uri: 'https://internationalyogafestival.org/wp-content/uploads/2023/08/Logo-Top51.png' }} />

          <Button textColor='#fff' buttonColor='#d14158' style={{ marginHorizontal: 16, marginBottom: 16 }} mode="contained" onPress={() => {
            Alert.alert("Coming Soon...!")
          }}>
            Register for IYF 2024 Festival !
          </Button>
        </View>
        {/* about IYF */}
        <View>
          <Subheading style={{ textAlign: 'center', backgroundColor: 'white', color: theme.colors.primary, paddingVertical: 16 }}>A Celebration of the Joy of Yoga at the International Yoga Festival</Subheading>
          <PresentersGrid title={''} data={aboutIYF} navigation={props.navigation} />
        </View>

        {/* Books download */}
        <View style={{ marginTop: 16, backgroundColor: 'white' }}>
          <Headline style={{ marginHorizontal: 16, marginVertical: 20 }}>Learn About IYF 2023!</Headline>

          {applyHorizontalScroll(<ImageCard data={booksCar} />)}


        </View>

        {/* Online Books Purchase */}

        <View style={{ marginTop: 16, backgroundColor: 'white' }}>

          <Headline style={{ marginHorizontal: 16, marginVertical: 20 }}>Drops of Inspiration</Headline>

          {applyHorizontalScroll(<ImageCard data={purchase} />)}

        </View>
        
        <View style={{ marginTop: 16, backgroundColor: 'white' }}>
          <Headline style={{ marginHorizontal: 16, marginVertical: 20 }}>Testimonials</Headline>

          <Testimonials data={testimonials} />
        </View>

      </ScrollView>
    </SafeAreaView>

  );
};

export default HomeScreen;
