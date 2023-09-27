import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {IButtonProps} from './builderProps';
import styles from './styles';

const Button: React.FC<IButtonProps> = ({label, ...props}) => {
  return (
    <TouchableOpacity {...props}>
      <Text style={styles.buttonTextStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
