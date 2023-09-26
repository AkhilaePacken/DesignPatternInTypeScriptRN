import React from 'react';
import {Text, View} from 'react-native';
import {ITextElement} from './elementProps';
import styles from './styles';
const TextElement = ({text}: ITextElement) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

export default TextElement;
