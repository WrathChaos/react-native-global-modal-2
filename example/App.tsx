import React, { useRef } from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import GlobalModal, { ModalController, GlobalModalRef } from './lib';

interface AppProps {
  style?: StyleProp<ViewStyle>;
}

const App: React.FC<AppProps> = () => {
  const modalRef = useRef<GlobalModalRef>(null);

  React.useEffect(() => {
    if (modalRef.current) {
      ModalController.setModalRef(modalRef as React.MutableRefObject<GlobalModalRef>);
    }
  }, []);

  const showSimpleModal = () => {
    ModalController.show({
      content: (
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Simple Modal</Text>
          <Text style={styles.modalText}>This is a simple modal example</Text>
          <Button title="Close" onPress={() => ModalController.hide()} />
        </View>
      ),
      onShow: () => console.log('Modal shown'),
      onHide: () => console.log('Modal hidden'),
    });
  };

  const showStyledModal = () => {
    ModalController.show({
      content: (
        <View style={styles.styledModalContent}>
          <Text style={styles.styledModalTitle}>Styled Modal</Text>
          <Text style={styles.styledModalText}>
            This modal has custom styling and animations
          </Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => ModalController.hide()}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      ),
    });
  };

  const showFullScreenModal = () => {
    ModalController.show({
      content: (
        <View style={styles.fullScreenModal}>
          <Text style={styles.fullScreenTitle}>Full Screen Modal</Text>
          <Text style={styles.fullScreenText}>
            This modal takes up the full screen
          </Text>
          <TouchableOpacity
            style={styles.fullScreenCloseButton}
            onPress={() => ModalController.hide()}>
            <Text style={styles.fullScreenCloseText}>Close</Text>
          </TouchableOpacity>
        </View>
      ),
      isFullScreen: true,
      containerStyle: {
        backgroundColor: '#fff'
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonStyle} onPress={showSimpleModal}>
        <Text style={styles.buttonText}>Show Simple Modal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle} onPress={showStyledModal}>
        <Text style={styles.buttonText}>Show Styled Modal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle} onPress={showFullScreenModal}>
        <Text style={styles.buttonText}>Show Full Screen Modal</Text>
      </TouchableOpacity>

      <GlobalModal
        ref={modalRef}
        animationIn="fadeIn"
        animationOut="fadeOut"
        onBackdropPress={ModalController.hide}
        defaultStyle={styles.defaultModalStyle}
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
    padding: 20,
  },
  buttonStyle: {
    height: 45,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  buttonText: {
    color: '#102B43',
    fontSize: 16,
    fontWeight: '600',
  },
  defaultModalStyle: {
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  styledModalContent: {
    backgroundColor: '#4A90E2',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  styledModalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  styledModalText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '600',
  },
  fullScreenModal: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  fullScreenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  fullScreenText: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
  },
  fullScreenCloseButton: {
    backgroundColor: '#102B43',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  fullScreenCloseText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
