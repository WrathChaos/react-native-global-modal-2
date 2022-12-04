import React from 'react';
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
  Pressable,
  ImageStyle,
  TextStyle,
} from 'react-native';
/**
 * ? Local Imports
 */
import styles from './Title.style';

export interface TitleProps {
  style?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  iconContainerStyle?: StyleProp<ViewStyle>;
  titleContainerStyle?: StyleProp<ViewStyle>;
  descriptionContainerStyle?: StyleProp<ViewStyle>;
  iconImageStyle?: StyleProp<ImageStyle>;
  titleTextStyle?: StyleProp<TextStyle>;
  descriptionTextStyle?: StyleProp<TextStyle>;
  title?: string;
  description?: string;
  imageSource?: ImageSourcePropType;
  onClosePress?: () => void;
}

const Title: React.FC<TitleProps> = ({
  title,
  description,
  style,
  headerStyle,
  iconImageStyle,
  titleTextStyle,
  iconContainerStyle,
  titleContainerStyle,
  descriptionTextStyle,
  descriptionContainerStyle,
  imageSource = require('../../local-assets/home.png'),
  onClosePress,
}) => {
  const renderIcon = () => (
    <View style={[styles.iconContainer, iconContainerStyle]}>
      <Image
        resizeMode="contain"
        source={imageSource}
        style={[styles.iconImageStyle, iconImageStyle]}
      />
    </View>
  );

  const renderTitle = () => (
    <View style={[styles.titleContainer, titleContainerStyle]}>
      <Text style={[styles.titleTextStyle, titleTextStyle]}>{title}</Text>
    </View>
  );

  const renderDescription = () => (
    <View style={[styles.descriptionContainer, descriptionContainerStyle]}>
      <Text style={[styles.descriptionTextStyle, descriptionTextStyle]}>
        {description}
      </Text>
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
      <View style={[styles.header, headerStyle]}>
        {renderIcon()}
        {renderTitle()}
        {renderCloseButton()}
      </View>
      {renderDescription()}
    </View>
  );
};

export default Title;
