import React, {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {Modal, StyleSheet, Dimensions, View} from 'react-native';
import AnimatedModalController, {
  AnimatedModalRef,
} from './AnimatedModalController';
import Title from './components/title/Title';
import Button from './components/button/Button';
import OutlineButton from './components/outline-button/OutlineButton';

const {width: ScreenWidth} = Dimensions.get('screen');

const AnimatedModal = () => {
  const modalRef = useRef<AnimatedModalRef>();
  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    AnimatedModalController.setModalRef(modalRef);
  }, []);

  useImperativeHandle(
    modalRef,
    () => ({
      show: () => {
        setModalVisible(true);
      },
      hide: () => {
        setModalVisible(false);
      },
    }),
    [],
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={AnimatedModalController.hide}
    >
      <View style={styles.container}>
        <Title
          title="Update available"
          description="A new software version is available for download"
          onClosePress={AnimatedModalController.hide}
        />
        <View
          style={{
            marginTop: 16,
            marginLeft: 40,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Button text="Update" onPress={() => {}} />
          <OutlineButton
            text="Not now"
            style={{marginLeft: 16}}
            onPress={() => {}}
          />
        </View>
      </View>
    </Modal>
  );
};

export default forwardRef(AnimatedModal);

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: '50%',
    borderRadius: 16,
    backgroundColor: '#fff',
    width: ScreenWidth * 0.9,
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 16,
    alignSelf: 'center',
  },
});
