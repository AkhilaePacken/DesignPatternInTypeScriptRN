import React from 'react';
import {Text, View} from 'react-native';
import {ITheme} from '../factoryProps';
import styles from '../styles';

// LightTheme factory

const LightThemeFactory = (): ITheme => ({
  createButton(): React.FC {
    return () => (
      <View style={styles.lightButton}>
        <Text style={styles.lightButtonText}>Light Button</Text>
      </View>
    );
  },
  createHeader(): React.FC {
    return () => (
      <View style={styles.lightHeader}>
        <Text>Light Header</Text>
      </View>
    );
  },
});

export {LightThemeFactory};
