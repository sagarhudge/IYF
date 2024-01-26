import { View, Text, Image, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';

const DetailScreen = () => {
  const route = useRoute();

  return (
    <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 18, paddingBottom: 12 }}>ghf:Details</Text>
      <Image
        onError={(e) => Alert.alert(JSON.stringify(e))}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
};

export default DetailScreen;