import React from 'react';
import {View, Text} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

interface AboutPageProps {
  navigation: NavigationScreenProp<any, any>;
}

const AboutPage: React.FC<AboutPageProps> = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      }}>
      <Text style={{fontSize: 32, color: '#000000'}}>About Page</Text>
    </View>
  );
};

export default AboutPage;
