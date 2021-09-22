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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [Items, setItems] = useState([
    {key: 1, item: 'Item 1'},
    {key: 2, item: 'Item 2'},
    {key: 3, item: 'Item 3'},
    {key: 4, item: 'Item 4'},
    {key: 5, item: 'Item 5'},
    {key: 6, item: 'Item 6'},
    {key: 7, item: 'Item 7'},
    {key: 8, item: 'Item 8'},
    {key: 44, item: 'Item 9'},
    {key: 68, item: 'Item 27'},
    {key: 0, item: 'Item 78'},
  ]);
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  const onRefresh = () => {
    setRefreshing(true);
    setImmediate(() => {
      setItems([
        ...Items,
        {key: new Date().valueOf(), item: 'New number added'},
      ]);
      setRefreshing(false);
    });
  };
  const [Refreshing, setRefreshing] = useState(false);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
      }
      style={styles.body}>
      {Items.map(obj => {
        return (
          <View style={styles.view1} key={obj.key}>
            <Text style={styles.text}>{obj.item}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {},
  view1: {
    backgroundColor: '#028900',
    margin: 10,
  },
  view2: {
    backgroundColor: '#8686BF',
  },
  view3: {
    backgroundColor: '#696969',
  },
  text: {
    margin: 30,
    fontSize: 35,
    color: 'white',
  },
});

export default App;
