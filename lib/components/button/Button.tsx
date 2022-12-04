import React from "react";
import { Pressable, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./Button.style";

export interface ButtonProps {
  text?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  TouchableComponent?: any;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  style,
  TouchableComponent = Pressable,
  textStyle,
}) => {
  return (
    <TouchableComponent style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </TouchableComponent>
  );
};

export default Button;
