import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SingletonComponent from './SingletonComponent';
import styles from './styles';
import SingletonFun from './SingletonFun';
const Singleton: React.FC = SingletonFun(SingletonComponent);

const SingletonExample: React.FC = () => {
  const [shouldRenderSingleton, setShouldRenderSingleton] =
    useState<boolean>(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setShouldRenderSingleton(true);
        }}>
        <Text style={styles.textStyle}>Render The Singleton Component!</Text>
      </TouchableOpacity>

      {shouldRenderSingleton && <Singleton />}
    </View>
  );
};

export default SingletonExample;
