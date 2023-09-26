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
const data = [
  {
    type: 'text',
    text: 'Click on',
    buttonText: '',
  },
  {
    type: 'button',
    text: '',
    buttonText: 'Confirm',
  },
];
function App(): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      {/* We can map the compoenet using Json */}
      {data.map((i: any, index: number) => (
        <Factory
          key={index}
          type={i.type}
          text={i?.text}
          buttonText={i?.buttonText}
        />
      ))}
      {/* We can directly use the compoennts */}
      <Factory type={'text'} text="click the buttton" />
      <Factory
        type={'button'}
        buttonText="Ok"
        onClick={() => console.log('on click')}
      />
    </View>
  );
}

export default App;
