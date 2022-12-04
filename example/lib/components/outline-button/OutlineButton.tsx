import React from "react";
import { Pressable, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./OutlineButton.style";

export interface OutlineButtonProps {
  text?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  TouchableComponent?: any;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  text,
  onPress,
  style,
  textStyle,
  TouchableComponent = Pressable,
}) => {
  return (
    <TouchableComponent style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </TouchableComponent>
  );
};

export default OutlineButton;
