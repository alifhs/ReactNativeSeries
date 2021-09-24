/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
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
const Stack = createStackNavigator();

const Home = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text>Home</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Text style={styles.text}>Profile</Text>
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
        <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};
const Settings = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text>Profile</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
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
