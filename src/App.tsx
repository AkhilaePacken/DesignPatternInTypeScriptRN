/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import styles from './factory/styles';
import BuilderPatttern from './builderPattern';

function App(): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      {/* Builder pattern */}
      <BuilderPatttern />
    </View>
  );
}

export default App;
