import React from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
/**
 * ? Local Imports
 */
import AnimatedModal, {AnimatedModalController} from './lib';

interface AppProps {
  style?: StyleProp<ViewStyle>;
}

const App: React.FC<AppProps> = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          AnimatedModalController.show({
            title: 'Update available',
            description: 'A new software version is available for download',
            primaryButtonText: 'Update',
            outlineButtonText: 'Not now',
            titleProps: {
              imageSource: require('./assets/cross.png'),
            },
            onPrimaryButtonPress: () => {},
            onOutlineButtonPress: () => {},
          });
        }}
      >
        <Text>Open Modal</Text>
      </TouchableOpacity>
      <AnimatedModal
        animationIn="fadeIn"
        animationOut="fadeOut"
        onBackdropPress={AnimatedModalController.hide}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#102B43',
  },
  buttonStyle: {
    height: 45,
    borderRadius: 12,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
