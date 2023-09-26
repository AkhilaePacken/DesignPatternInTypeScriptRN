/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Factory from './factory';
import styles from './factory/styles';
import AbstractFactory from './abstractFactory';

function App(): JSX.Element {
  const [isTheme, setTheme] = useState<boolean>(false);
  return (
    <View style={styles.mainContainer}>
      {/* abstractFactory */}
      <TouchableOpacity
        style={styles.themeStyle}
        onPress={() => setTheme(!isTheme)}>
        <Text>{isTheme ? 'Dark mode' : 'Light mode'}</Text>
      </TouchableOpacity>

      <AbstractFactory theme={isTheme ? 'light' : 'dark'} />
    </View>
  );
}

export default App;
