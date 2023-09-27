/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import styles from './factory/styles';
import SingletonPattern from './singletonPattern';

function App(): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      {/* Singleton Pattern */}
      <SingletonPattern />
    </View>
  );
}

export default App;
