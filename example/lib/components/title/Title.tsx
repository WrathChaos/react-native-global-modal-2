import React from 'react';
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
/**
 * ? Local Imports
 */
import styles from './Title.style';

export interface TitleProps {
  style?: StyleProp<ViewStyle>;
  title?: string;
  description?: string;
  imageSource?: ImageSourcePropType;
  onClosePress?: () => void;
}

const Title: React.FC<TitleProps> = ({
  title,
  description,
  style,
  imageSource = require('../../local-assets/home.png'),
  onClosePress,
}) => {
  const renderIcon = () => (
    <View style={styles.iconContainer}>
      <Image
        resizeMode="contain"
        source={imageSource}
        style={styles.iconImageStyle}
      />
    </View>
  );

  const renderTitle = () => (
    <View style={styles.titleContainer}>
      <Text style={styles.titleTextStyle}>{title}</Text>
    </View>
  );

  const renderDescription = () => (
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionTextStyle}>{description}</Text>
    </View>
  );

  const renderCloseButton = () => (
    <Pressable style={styles.closeButton} onPress={onClosePress}>
      <Image
        source={require('../../local-assets/cross.png')}
        style={styles.closeButtonImageStyle}
      />
    </Pressable>
  );

  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        {renderIcon()}
        {renderTitle()}
        {renderCloseButton()}
      </View>
      {renderDescription()}
    </View>
  );
};

export default Title;
