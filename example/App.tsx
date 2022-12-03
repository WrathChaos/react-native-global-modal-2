import React from 'react';
import {View, StyleProp, ViewStyle, TouchableOpacity, Text} from 'react-native';
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
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#102B43',
      }}
    >
      <TouchableOpacity
        onPress={() => {
          AnimatedModalController.show();
        }}
      >
        <Text>Hello</Text>
      </TouchableOpacity>

      <AnimatedModal />
    </View>
  );
};

export default App;
