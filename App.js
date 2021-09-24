/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const Tab = createBottomTabNavigator();

const Home = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text>Home</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Text style={styles.text}>{'Profile -->'}</Text>
      </TouchableOpacity>
    </View>
  );
};
const Profile = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text>Profile</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <Text style={styles.text}>{'Settings -->'}</Text>
      </TouchableOpacity>
    </View>
  );
};
const Settings = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text>Profile</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={styles.text}>{'Home -->'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          appBar: false,
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
              size = focused ? 25 : 20;
              color = focused ? 'blue' : 'gray';
            } else if (route.name === 'Profile') {
              iconName = 'users';
              size = focused ? 25 : 20;
              color = focused ? 'blue' : 'gray';
            } else if (route.name === 'Settings') {
              iconName = 'cog';
              size = focused ? 25 : 20;
              color = focused ? 'blue' : 'gray';
            }

            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: 'lime',
          tabBarInactiveBackgroundColor: 'white',
        })}>
        <Tab.Screen name="Home" component={Home} />

        <Tab.Screen
          options={{headerShown: false}}
          name="Profile"
          component={Profile}
        />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'gray',
    width: '70%',
    borderWidth: 2,
  },
  text: {
    color: '#ffffff',
  },
  inputDisplay: {
    marginTop: 10,
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
