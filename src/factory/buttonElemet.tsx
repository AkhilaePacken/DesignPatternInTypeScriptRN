import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {IButtonElement} from './elementProps';
import styles from './styles';
const ButtonElement = ({buttonText, onClick}: IButtonElement) => {
  return (
    <TouchableOpacity style={styles.buttonView} onPress={onClick}>
      <Text style={styles.buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default ButtonElement;
