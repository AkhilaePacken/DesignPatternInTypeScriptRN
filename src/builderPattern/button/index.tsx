import React from 'react';
import {View, Alert} from 'react-native';
import Button from '../Button';
import ButtonBuilder from '../ButtonBuilder';
import styles from '../styles';
const Buttons: React.FC = () => {
  const primaryButton = new ButtonBuilder()
    .withLabel('Primary Button')
    .withOnPress(() => Alert.alert('Primary Button Pressed'))
    .withStyle(styles.primaryButton)
    .build();

  const secondaryButton = new ButtonBuilder()
    .withLabel('Secondary Button')
    .withOnPress(() => Alert.alert('Secondary Button Pressed'))
    .withStyle(styles.secondaryButton)
    .build();

  return (
    <View style={styles.container}>
      <Button {...primaryButton} />
      <Button {...secondaryButton} />
    </View>
  );
};

export default Buttons;
