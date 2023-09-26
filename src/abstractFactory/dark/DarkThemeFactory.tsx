import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ITheme} from '../factoryProps';
import styles from '../styles';

// DarkTheme factory
class DarkThemeFactory implements ITheme {
  createButton(): React.FC {
    return () => (
      <View style={styles.darkButton}>
        <Text>Dark Button</Text>
      </View>
    );
  }

  createHeader(): React.FC {
    return () => (
      <View style={styles.darkHeader}>
        <Text>Dark Header</Text>
      </View>
    );
  }
}

export {DarkThemeFactory};
