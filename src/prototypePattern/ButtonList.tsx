import React from 'react';
import {View, Alert} from 'react-native';
import ButtonPrototype from './ButtonPrototype';
import styles from './styles';

const ButtonList: React.FC = () => {
  const PrimaryButton = ButtonPrototype('Primary Button');
  const SecondaryButton = ButtonPrototype('Secondary Button');

  return (
    <View style={styles.container}>
      <PrimaryButton
        onPress={() => Alert.alert('Primary Button Pressed')}
        style={styles.primaryButton}
      />
      <SecondaryButton
        onPress={() => Alert.alert('Secondary Button Pressed')}
        style={styles.secondaryButton}
      />
    </View>
  );
};

export default ButtonList;
