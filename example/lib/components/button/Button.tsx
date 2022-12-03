import React from 'react';
import {Pressable, Text, StyleProp, ViewStyle} from 'react-native';
/**
 * ? Local Imports
 */
import styles from './Button.style';

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  text: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({style, text, onPress}) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.textStyle}>{text}</Text>
    </Pressable>
  );
};

export default Button;
