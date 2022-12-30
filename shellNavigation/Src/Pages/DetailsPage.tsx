import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

interface DetailPageProps {
  navigation: NavigationScreenProp<any, any>;
  route: any;
}

const DetailsPage: React.FC<DetailPageProps> = props => {
  useEffect(() => {
    console.log('the route is', props.route.params);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      }}>
      <Text style={{fontSize: 28, color: '#000000', alignItems: 'flex-start'}}>
        Name : {props.route.params.user.name}
      </Text>
      <Text style={{fontSize: 20, color: '#000000'}}>
        Mail : {props.route.params.user.email}
      </Text>
    </View>
  );
};

export default DetailsPage;
