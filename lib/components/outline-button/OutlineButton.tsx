import React from "react";
import { Pressable, Text, StyleProp, ViewStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./OutlineButton.style";

export interface OutlineButtonProps {
  text: string;
  onPress: () => void;
  // Optionals
  style?: StyleProp<ViewStyle>;
  TouchableComponent?: any;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  text,
  onPress,
  style,
  TouchableComponent = Pressable,
}) => {
  return (
    <TouchableComponent style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableComponent>
  );
};

export default OutlineButton;
