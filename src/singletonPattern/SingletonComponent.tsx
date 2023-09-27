import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

// Singleton component
const SingletonComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>This is a Singleton Component</Text>
    </View>
  );
};
export default SingletonComponent;
