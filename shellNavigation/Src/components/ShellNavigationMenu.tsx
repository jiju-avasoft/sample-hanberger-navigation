import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const Width = Dimensions.get('window').width;
import {NavigationScreenProp} from 'react-navigation';

interface ShellNavigationMenuProps {
  navigation: NavigationScreenProp<any, any>;
  style: StyleProp<any>;
}

const ShellNavigationMenu: React.FC<ShellNavigationMenuProps> = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: Width,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        width: fadeAnim,
      }}>
      <View
        style={{
          width: '80%',
          backgroundColor: '#FFFFFF',
          flex: 1,
          zIndex: 4,
        }}>
        <View
          style={{
            height: 300,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{width: 200, height: 200, borderRadius: 100}}>
            <Image
              source={require('../Assets/man.png')}
              style={{width: 200, height: 200, borderRadius: 100}}
            />
          </View>
          <Text style={[styles.menuText, {marginTop: 20}]}>
            Jiju Selvakumar
          </Text>
        </View>
        <Pressable
          onPress={() => {
            props.navigation.navigate('Profile');
          }}
          style={styles.menu}>
          <Text style={styles.menuText}>Profile</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            props.navigation.navigate('Settings');
          }}
          style={styles.menu}>
          <Text style={styles.menuText}>Settings</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            props.navigation.navigate('About');
          }}
          style={styles.menu}>
          <Text style={styles.menuText}>About</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  menu: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
  },
  menuText: {color: '#000000', fontSize: 20, fontWeight: '600'},
});

export default ShellNavigationMenu;
