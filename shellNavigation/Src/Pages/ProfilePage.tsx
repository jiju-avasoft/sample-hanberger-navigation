import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface ProfilePageProps {
  navigation: NavigationScreenProp<any, any>;
}

const ProfilePage: React.FC<ProfilePageProps> = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      }}>
      <Text style={{fontSize: 32, color: '#000000'}}>Profile Page</Text>
    </View>
  );
};

export default ProfilePage;
