import React from 'react'
import { View, Text } from 'react-native'
import { NavigationScreenProp } from 'react-navigation';

interface SettingPageProps {
    navigation: NavigationScreenProp<any, any>;
  }

const SettingsPage: React.FC<SettingPageProps> = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      }}>
      <Text style={{fontSize: 32, color: '#000000'}}>Settings Page</Text>
    </View>
  )
}

export default SettingsPage