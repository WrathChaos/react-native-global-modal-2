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
import GlobalModal, {
  ModalController,
  ModalData,
} from 'react-native-global-modal-2';

interface AppProps {
  style?: StyleProp<ViewStyle>;
}

const App: React.FC<AppProps> = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          const data: ModalData = {
            title: 'Update available',
            description: 'A new software version is available for download',
            primaryButtonText: 'Update',
            outlineButtonText: 'Not now',
            titleProps: {
              imageSource: require('./assets/cross.png'),
            },
            onPrimaryButtonPress: () => {},
            onOutlineButtonPress: () => {},
          };
          ModalController.show(data);
        }}
      >
        <Text>Open Modal</Text>
      </TouchableOpacity>
      <GlobalModal
        animationIn="fadeIn"
        animationOut="fadeOut"
        onBackdropPress={ModalController.hide}
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
