import {TouchableOpacityProps} from 'react-native';

class ButtonBuilder {
  private label: string = 'Button';
  private onPress: (() => void) | undefined;
  private style: TouchableOpacityProps['style'] = {};

  withLabel(label: string): this {
    this.label = label;
    return this;
  }

  withOnPress(onPress: () => void): this {
    this.onPress = onPress;
    return this;
  }

  withStyle(style: TouchableOpacityProps['style']): this {
    this.style = style;
    return this;
  }

  build() {
    return {
      label: this.label,
      onPress: this.onPress,
      style: this.style,
    };
  }
}

export default ButtonBuilder;
