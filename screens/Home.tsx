import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';

const { width } = Dimensions.get("window");
const height = width * 0.6;

const HomeScreen = () => {


  const arrayImg = [
    {
      id: 1,
      src: 'https://internationalyogafestival.org/wp-content/uploads/2020/12/saints-slide-pink2.jpg',
      message: 'Listen to the Divine Words of Indias great spiritual leade',

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


  const [active, setActive] = useState(0);

  return (
 

      <View style={{height,width,alignItems:'center'}}>
        <ScrollView pagingEnabled
          horizontal
          style={{ width, height }}
          showsHorizontalScrollIndicator={false}>
          {
            arrayImg.map((item: any, index: number) => {
              return <Image
                key={index}
                source={{ uri: item.src }}
                style={{ width, height, resizeMode: 'cover' }}
              />

            })
          }
        </ScrollView>
        <View style={{ flexDirection: 'row', position: 'absolute', bottom: 10 }}>
          {
            arrayImg.map((k: any, i: number) => <Text key={i} style={{ color: i == active ? 'red' : 'gray' }}>⬤</Text>)
          }
        </View>
      </View>

   );
};

export default HomeScreen;
