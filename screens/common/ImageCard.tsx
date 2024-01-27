import * as React from 'react';
import { Linking } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />

const ImageCard = () => (
    <Card  onPress={() => Linking.openURL('https://internationalyogafestival.org/IYF-2023-Schedule.pdf')}>

        <Card.Cover style={{width:200,height:200}} source={{ uri: 'https://internationalyogafestival.org/wp-content/uploads/2023/03/2023schedulecover.jpg' }} />
        <Card.Content style={{alignItems:'center'}}>
            <Text variant="titleLarge">Download the IYF 2023 Schedule</Text>
            <Text variant="bodyMedium">Learn about the daily classes offered in yogasana, meditation and healing practices, as well as talks with renowned spiritual leaders.</Text>
        </Card.Content>
        {/* <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}
    </Card>
);

export default ImageCard;