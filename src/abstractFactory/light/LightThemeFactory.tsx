import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ITheme} from '../factoryProps';
import styles from '../styles';

// LightTheme factory
class LightThemeFactory implements ITheme {
  createButton(): React.FC {
    return () => (
      <View style={styles.lightButton}>
        <Text>Light Button</Text>
      </View>
    );
  }

  createHeader(): React.FC {
    return () => (
      <View style={styles.lightHeader}>
        <Text>Light Header</Text>
      </View>
    );
  }
}

export {LightThemeFactory};
