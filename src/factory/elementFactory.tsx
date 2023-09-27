import React from 'react';
import {IElemet} from './ElementProps';
import TextElement from './TextElemet';
import ButtonElement from './ButtonElemet';

const ElementFactory = ({type, text, buttonText}: IElemet) => {
  switch (type) {
    case 'text':
      return <TextElement text={text} />;
    case 'button':
      return <ButtonElement buttonText={buttonText} />;
    default:
      <TextElement text={'Not found'} />;
  }
};

export default ElementFactory;
