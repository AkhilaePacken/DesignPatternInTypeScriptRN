import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {IUserButton} from './userProps';
import styles from './styles';
const UserButton = ({buttonText, onClick}: IUserButton) => {
  return (
    <TouchableOpacity style={styles.buttonView} onPress={onClick}>
      <Text style={styles.buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default UserButton;
