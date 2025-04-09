import React, {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useCallback,
} from "react";
import { StyleSheet, View, StyleProp, ViewStyle, Dimensions } from "react-native";
import Modal, { ModalProps } from "react-native-modal";
import ModalController from "./ModalController";
import useStateWithCallback from "./helpers/useStateWithCallback";

export interface ModalData {
  content: React.ReactNode;
  onShow?: () => void;
  onHide?: () => void;
  isFullScreen?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

export interface GlobalModalProps extends Partial<ModalProps> {
  defaultStyle?: StyleProp<ViewStyle>;
}

export type GlobalModalRef = {
  show: (data: ModalData) => void;
  hide: () => void;
};

const { width, height } = Dimensions.get('window');

const GlobalModal = forwardRef<GlobalModalRef, GlobalModalProps>(
  ({ defaultStyle, ...rest }, ref) => {
    const [modalVisible, setModalVisible] = useStateWithCallback(false);
    const [data, setData] = useStateWithCallback<ModalData>({
      content: null,
      isFullScreen: false,
    });

    const show = useCallback((modalData: ModalData) => {
      setData(modalData);
      setModalVisible(true, () => {
        modalData.onShow?.();
      });
    }, []);

    const hide = useCallback(() => {
      setModalVisible(false, () => {
        data.onHide?.();
      });
    }, [data]);

    useImperativeHandle(ref, () => ({
      show,
      hide,
    }), [show, hide]);

    useLayoutEffect(() => {
      if (ref) {
        ModalController.setModalRef(ref as React.MutableRefObject<GlobalModalRef>);
      }
    }, [ref]);

    const containerStyle = [
      styles.baseContainer,
      data.isFullScreen ? styles.fullScreenContainer : styles.defaultContainer,
      defaultStyle,
      data.containerStyle,
    ];

    return (
      <Modal 
        {...rest} 
        isVisible={modalVisible}
        animationIn={data.isFullScreen ? "fadeIn" : "slideInDown"}
        animationOut={data.isFullScreen ? "fadeOut" : "slideOutUp"}
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating
        useNativeDriver
        style={[
          styles.modal,
          data.isFullScreen ? styles.fullScreenModal : styles.centeredModal
        ]}
        coverScreen
        backdropColor="rgba(0, 0, 0, 0.5)"
        statusBarTranslucent
        propagateSwipe
      >
        <View style={containerStyle}>
          {data.content}
        </View>
      </Modal>
    );
  },
);

GlobalModal.displayName = 'GlobalModal';

export default GlobalModal;

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    padding: 0,
  },
  fullScreenModal: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
  },
  centeredModal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseContainer: {
    backgroundColor: 'transparent',
  },
  fullScreenContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    margin: 0,
    padding: 0,
  },
  defaultContainer: {
    width: '90%',
    maxWidth: 400,
    minHeight: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
