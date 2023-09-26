import React from 'react';
import {Text, View} from 'react-native';
import {ITheme} from '../factoryProps';
import styles from '../styles';

// LightTheme factory

const LightThemeFactory = (): ITheme => ({
  createHeader: () => {
    const LightHeader: React.FC = ({}) => (
      <View style={styles.lightHeader}>
        <Text>Light Header</Text>
      </View>
    );
    return LightHeader;
  },
  createButton: () => {
    const LightButton: React.FC = ({}) => (
      <View style={styles.lightButton}>
        <Text style={styles.lightButtonText}>Light Button</Text>
      </View>
    );
    return LightButton;
  },
});

export {LightThemeFactory};
