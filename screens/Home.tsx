import { Dimensions, SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import Slider from './common/Slider';
import PresentorsGrid from './common/PresentorsGrid';
import { ScrollView } from 'react-native-gesture-handler';
import { presenterData } from './store/ArrayConst';

const { width } = Dimensions.get("window");
const height = width * 0.6;

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#dcdcdc' }}>
      <Slider />

      <ScrollView>
        <PresentorsGrid title={'Presentors'} data={presenterData} />

      </ScrollView>
    </SafeAreaView>

  );
};

export default HomeScreen;
