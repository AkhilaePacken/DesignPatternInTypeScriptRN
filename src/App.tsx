/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import styles from './factory/styles';
import PrototypePattern from './prototypePattern';

function App(): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      {/* prototype Pattern */}
      <PrototypePattern />
    </View>
  );
}

export default App;
