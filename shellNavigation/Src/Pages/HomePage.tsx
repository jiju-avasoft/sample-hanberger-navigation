import React, {ReactElement, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import ShellNavigationMenu from '../components/ShellNavigationMenu';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

interface HomePageProps {
  navigation: NavigationScreenProp<any, any>;
}

interface SwipeValue {
  xValue: number;
  yValue: number;
}

interface User {
  name: string;
  email: string;
}

const HomePage: React.FC<HomePageProps> = props => {
  const [visible, setVisible] = useState<boolean>(false);

  const [swiperValue, setSwiperValue] = useState<SwipeValue>();

  const [user, setUser] = useState<User>();

  return (
    <View
      style={styles.container}
      onTouchStart={e => {
        const clonedSwipe = {...swiperValue};

        clonedSwipe.xValue = e.nativeEvent.pageX;
        clonedSwipe.yValue = e.nativeEvent.pageY;

        setSwiperValue(clonedSwipe as SwipeValue);
      }}
      onTouchEnd={e => {
        if (swiperValue!.xValue < e.nativeEvent.pageX) {
          return setVisible(true);
        }
        if (swiperValue!.xValue > e.nativeEvent.pageX) {
          return setVisible(false);
        }
      }}>
      <View
        style={{
          height: Height,
          width: Width,
          position: 'absolute',
          zIndex: 1,
          flexDirection: 'column',
        }}>
        <View
          style={[
            {
              flexDirection: 'row',
              zIndex: 1,
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 5,
              justifyContent: 'space-between',
              borderBottomColor: '#d16578',
              borderBottomWidth: 1,
            },
          ]}>
          <Pressable
            onPress={() => {
              setVisible(true);
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              source={require('../Assets/menu.png')}
              style={{
                width: 40,
                height: 40,
              }}
            />
          </Pressable>
          <Text style={{fontSize: 28, fontWeight: '600', color: '#000000'}}>
            Home
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <TextInput
            placeholder="Enter name"
            placeholderTextColor={'#d3d3d3'}
            value={user?.name}
            style={styles.inputText}
            onChangeText={text => {
              let clonedUser = {...user};

              clonedUser.name = text;
              setUser(clonedUser as User);
            }}
          />
          <TextInput
            placeholder="Enter name"
            placeholderTextColor={'#d3d3d3'}
            value={user?.email}
            style={styles.inputText}
            onChangeText={text => {
              let clonedUser = {...user};

              clonedUser.email = text;
              setUser(clonedUser as User);
            }}
          />
          <Pressable
            style={{
              width: '100%',
              padding: 8,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#1B5E20',
              borderRadius: 8,
              marginTop: 20,
            }}
            onPress={() => {
              props.navigation.navigate('Details', { user});
            }}>
            <Text
              style={{
                margin: 0,
                fontSize: 18,
                fontWeight: '600',
                color: '#ffffff',
              }}>
              Submit
            </Text>
          </Pressable>
        </View>
      </View>

      {visible && (
        <View
          style={{
            height: Height,
            width: Width,
            position: 'absolute',
            zIndex: 2,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <Pressable
            onPress={() => {
              setVisible(false);
            }}
            style={{flex: 1, zIndex: 2}}>
            <ShellNavigationMenu
              style={{flex: 1, zIndex: 5}}
              navigation={props.navigation}
            />
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Width,
    height: Height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
  },
  menuText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '600',
  },
  inputText: {
    color: '#000000',
    fontSize: 18,
    width: '100%',
    padding: 5,
    marginBottom: 10,
  },
});

export default HomePage;
