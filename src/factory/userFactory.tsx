import {View, Text} from 'react-native';
import React from 'react';
import {IElemet} from './userProps';
import UserText from './userText';
import UserButton from './userButton';

const UserFactory = ({type, text, buttonText}: IElemet) => {
  switch (type) {
    case 'text':
      return <UserText text={text} />;
    case 'button':
      return <UserButton buttonText={buttonText} />;
    default:
      <UserText text={'Not found'} />;
  }
};

export default UserFactory;
