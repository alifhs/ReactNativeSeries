/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [name, setName] = useState('');
  const onInputChange = value => {
    setName(value);
  };

  return (
    <View style={styles.body}>
      <Text>Enter you name:</Text>
      <TextInput style={styles.input} onChangeText={onInputChange}></TextInput>

      {/* <Button title="Submit" /> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Alert.alert('Warning', `User typed ${name}`, [{text: 'Ok'}])
        }}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.inputDisplay}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
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
