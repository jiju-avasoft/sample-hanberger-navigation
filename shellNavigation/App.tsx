import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AboutPage from './Src/Pages/AboutPage';
import DetailsPage from './Src/Pages/DetailsPage';
import HomePage from './Src/Pages/HomePage';
import ProfilePage from './Src/Pages/ProfilePage';
import SettingsPage from './Src/Pages/SettingsPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="About"
          component={AboutPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
