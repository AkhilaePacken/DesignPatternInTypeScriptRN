import React from 'react';
import {IButtonProps} from './ButtonProps';
import Button from './Button';

function ButtonPrototype(label: string): React.FC<IButtonProps> {
  const ButtonClone: React.FC<IButtonProps> = props => {
    return <Button label={label} {...props} />;
  };

  return ButtonClone;
}

export default ButtonPrototype;
