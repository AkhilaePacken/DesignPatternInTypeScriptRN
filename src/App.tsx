/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import Factory from './factory';
import styles from './factory/styles';

function App(): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      <Factory type={'text'} text="click the buttton" />
      <Factory
        type={'button'}
        buttonText="Confirm"
        onClick={() => console.log('on click')}
      />
    </View>
  );
}

export default App;
