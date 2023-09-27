import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import {IButtonProps} from './ButtonProps';

const Button: React.FC<IButtonProps> = ({label, ...props}) => {
  return (
    <TouchableOpacity {...props}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
