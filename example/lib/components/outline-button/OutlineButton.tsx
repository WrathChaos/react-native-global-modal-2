import React from 'react';
import {Pressable, Text, StyleProp, ViewStyle} from 'react-native';
/**
 * ? Local Imports
 */
import styles from './OutlineButton.style';

interface OutlineButtonProps {
  style?: StyleProp<ViewStyle>;
  text: string;
  onPress: () => void;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  style,
  text,
  onPress,
}) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.textStyle}>{text}</Text>
    </Pressable>
  );
};

export default OutlineButton;
