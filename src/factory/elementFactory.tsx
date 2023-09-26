import React from 'react';
import {IElemet} from './elementProps';
import TextElement from './textElemet';
import ButtonElement from './buttonElemet';

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
