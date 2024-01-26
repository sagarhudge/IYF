import { StyleSheet, View, Text, Pressable, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Loader from './common/Loader';
import { SafeAreaView } from 'react-native-safe-area-context';



const HomeScreen = () => {
  const navigation = useNavigation();



  return (
    <SafeAreaView>

      <View style={{ flex: 1, paddingTop: 10 }}>
      </View>
      <Loader isLoading={false} />

    </SafeAreaView>
  );
};

export default HomeScreen;
