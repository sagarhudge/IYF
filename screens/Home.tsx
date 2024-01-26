import { StyleSheet, View, Text, Pressable, FlatList, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Loader from './common/Loader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { Image } from 'react-native';
import { useEffect } from 'react';



const HomeScreen = () => {
  const navigation = useNavigation();


  const arrayImg = [
    {
      id: 1,
      src: 'https://internationalyogafestival.org/wp-content/uploads/2020/12/saints-slide-pink2.jpg',
      message: 'Listen to the Divine Words of Indias great spiritual leade'
    },
    {
      id: 2,
      src: 'https://internationalyogafestival.org/wp-content/uploads/2019/11/homeslide-4-pink.jpg',
      message: 'Dive into the Depths of Yoga with world-renowned yogacharyas'
    },
    {
      id: 3,
      src: 'https://internationalyogafestival.org/wp-content/uploads/2019/11/homeslide-5-pink.jpg',
      message: 'Connect with fellow seekers from around the world'
    },
    ,
    {
      id: 4,
      src: 'https://internationalyogafestival.org/wp-content/uploads/2019/11/homeslide-8-pink.jpg',
      message: 'Delight in the Divine Culture of India'
    }
    ,
    {
      id: 5,
      src: 'https://internationalyogafestival.org/wp-content/uploads/2019/11/homeslide-6-pink.jpg',
      message: 'Experience Cultures from around the world'
    },
    {
      id: 6,
      src: 'https://internationalyogafestival.org/wp-content/uploads/2019/11/homeslide-7-pink.jpg',
      message: 'Join International Yoga Festival in the lap of the holy Himalayas'
    },
    {
      id: 7,
      src: 'https://internationalyogafestival.org/wp-content/uploads/2019/11/homeslide-7-pink.jpg',
      message: 'Unite with the Divine in You'
    }

  ]
  const imageSlider = () => {
    return arrayImg.map((item: any) => {
      return <ImageBackground style={{ width: '100%', height: "30%" }}
        resizeMode='cover' source={{ uri: item.src }} />
    })

  }

  const getData=()=>{
    fetch('https://internationalyogafestival.org/wp-content/uploads/2019/11/homeslide-7-pink.jpg')
    // .then(response=>response.json())
    .then(data=>console.log(data))
  }
  
  // useEffect(()=>{getData()},[]);
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ flex: 1, padding: 16 }}>

        <Text>asd</Text>

        {/* <Image
          style={{ width: 100, height: 100 }}
          onError={e=>console.log('--------',e)}
          source={{
            uri:
              'https://www.planwallpaper.com/static/images/9-credit-1.jpg'
          }} /> */}

        <Image source={{ uri:"https://facebook.github.io/react/img/logo_og.png" }}
          // onError={e => console.log('--------', e)}
          resizeMode='contain'
          style={{ width: 400, height: 400 }} />

          
      </View>
      <Loader isLoading={false} />

    </SafeAreaView>
  );
};

export default HomeScreen;
