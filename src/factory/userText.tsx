import React from 'react';
import {Text, View} from 'react-native';
import {IUserText} from './userProps';
import styles from './styles';
const UserText = ({text}: IUserText) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

export default UserText;
