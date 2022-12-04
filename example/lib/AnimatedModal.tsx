import React, {
  useRef,
  forwardRef,
  useLayoutEffect,
  useImperativeHandle,
} from 'react';
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import Modal, {ModalProps} from 'react-native-modal';
import AnimatedModalController, {
  AnimatedModalRef,
} from './AnimatedModalController';
import Title, {TitleProps} from './components/title/Title';
import Button, {ButtonProps} from './components/button/Button';
import OutlineButton, {
  OutlineButtonProps,
} from './components/outline-button/OutlineButton';
import useStateWithCallback from './helpers/useStateWithCallback';

export interface ModalData {
  title: string;
  description: string;
  primaryButtonText: string;
  outlineButtonText: string;
  onPrimaryButtonPress: () => void;
  onOutlineButtonPress: () => void;
  titleProps?: TitleProps;
  buttonProps?: ButtonProps;
  outlineButtonProps?: OutlineButtonProps;
  onShow?: () => void;
  onHide?: () => void;
}

export interface AnimatedModalProps extends Partial<ModalProps> {
  TouchableComponent?: any;
  style?: StyleProp<ViewStyle>;
  buttonsContainerStyle?: StyleProp<ViewStyle>;
}

const AnimatedModal: React.FC<AnimatedModalProps> = forwardRef(
  ({style, buttonsContainerStyle, TouchableComponent, ...rest}) => {
    const modalRef = useRef<AnimatedModalRef>();
    const [modalVisible, setModalVisible] = useStateWithCallback(false);
    const [data, setData] = useStateWithCallback<ModalData>(0);
    const {
      title,
      description,
      primaryButtonText,
      outlineButtonText,
      onShow,
      onHide,
      onPrimaryButtonPress,
      onOutlineButtonPress,
      buttonProps,
      outlineButtonProps,
      titleProps,
    } = data;

    useLayoutEffect(() => {
      AnimatedModalController.setModalRef(modalRef);
    }, []);

    useImperativeHandle(
      modalRef,
      () => ({
        show: (_data?: any) => {
          setData(_data, () => {
            setModalVisible(true, () => {
              onShow?.();
            });
          });
        },
        hide: () => {
          setModalVisible(false, () => {
            onHide?.();
          });
        },
      }),
      [onHide, onShow, setModalVisible],
    );

    return (
      <Modal {...rest} isVisible={modalVisible}>
        <View style={[styles.container, style]}>
          <Title
            title={title}
            description={description}
            onClosePress={AnimatedModalController.hide}
            {...titleProps}
          />
          <View style={[styles.buttonsContainer, buttonsContainerStyle]}>
            <Button
              text={primaryButtonText}
              TouchableComponent={TouchableComponent}
              {...buttonProps}
              onPress={onPrimaryButtonPress}
            />
            <OutlineButton
              text={outlineButtonText}
              style={styles.outlineButton}
              TouchableComponent={TouchableComponent}
              {...outlineButtonProps}
              onPress={onOutlineButtonPress}
            />
          </View>
        </View>
      </Modal>
    );
  },
);

export default AnimatedModal;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  buttonsContainer: {
    marginTop: 16,
    marginLeft: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  outlineButton: {
    marginLeft: 16,
  },
});
