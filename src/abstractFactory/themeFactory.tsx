import React from 'react';
import {View} from 'react-native';
import {DarkThemeFactory} from './dark/DarkThemeFactory';
import {LightThemeFactory} from './light/LightThemeFactory';
import {ITheme} from './factoryProps';
const ThemeFactory: React.FC<{theme: 'light' | 'dark'}> = ({theme}) => {
  let themeFactory: ITheme;

  if (theme === 'light') {
    themeFactory = LightThemeFactory();
  } else {
    themeFactory = DarkThemeFactory();
  }

  const Button = themeFactory.createButton();
  const Header = themeFactory.createHeader();

  return (
    <View>
      <Header />
      <Button />
    </View>
  );
};

export default ThemeFactory;
