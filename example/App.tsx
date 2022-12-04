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
          AnimatedModalController.show();
        }}
      >
        <Text>Open Modal</Text>
      </TouchableOpacity>
      <AnimatedModal
        animationIn="fadeIn"
        animationOut="fadeOut"
        title="Update available"
        description="A new software version is available for download"
        primaryButtonText="Update"
        outlineButtonText="Not now"
        onPrimaryButtonPress={() => {}}
        onOutlineButtonPress={() => {}}
        onBackdropPress={AnimatedModalController.hide}
        onShow={() => {
          console.log('onShow');
        }}
        onHide={() => {
          console.log('onHide');
        }}
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
