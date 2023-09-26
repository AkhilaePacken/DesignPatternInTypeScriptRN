import React from 'react';
import {Text, View} from 'react-native';
import {ITheme} from '../factoryProps';
import styles from '../styles';

// DarkTheme factory

const DarkThemeFactory = (): ITheme => ({
  createButton(): React.FC {
    return () => (
      <View style={styles.darkButton}>
        <Text style={styles.darkButtonText}>Dark Button</Text>
      </View>
    );
  },

  createHeader(): React.FC {
    return () => (
      <View style={styles.darkHeader}>
        <Text>Dark Header</Text>
      </View>
    );
  },
});
export {DarkThemeFactory};
