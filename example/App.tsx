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
import AnimatedModal from './lib/AnimatedModal';
import AnimatedModalController from './lib/AnimatedModalController';

interface AppProps {
  style?: StyleProp<ViewStyle>;
}

const App: React.FC<AppProps> = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          AnimatedModalController.show();
        }}
      >
        <Text>Hello</Text>
      </TouchableOpacity>
      <AnimatedModal
        title="Update available"
        description="A new software version is available for download"
        primaryButtonText="Update"
        outlineButtonText="Not now"
        onPrimaryButtonPress={() => {}}
        onOutlineButtonPress={() => {}}
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
});

export default App;
