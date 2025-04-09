import React, {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useCallback,
} from "react";
import { StyleSheet, View, StyleProp, ViewStyle } from "react-native";
import Modal, { ModalProps } from "react-native-modal";
import ModalController from "./ModalController";
import useStateWithCallback from "./helpers/useStateWithCallback";

export interface ModalData {
  content: React.ReactNode;
  onShow?: () => void;
  onHide?: () => void;
}

export interface GlobalModalProps extends Partial<ModalProps> {
  defaultStyle?: StyleProp<ViewStyle>;
}

export type GlobalModalRef = {
  show: (data: ModalData) => void;
  hide: () => void;
};

const GlobalModal = forwardRef<GlobalModalRef, GlobalModalProps>(
  ({ defaultStyle, ...rest }, ref) => {
    const [modalVisible, setModalVisible] = useStateWithCallback(false);
    const [data, setData] = useStateWithCallback<ModalData>({
      content: null
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

    return (
      <Modal 
        {...rest} 
        isVisible={modalVisible}
        animationIn="fadeIn"
        animationOut="fadeOut"
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating
        useNativeDriver
      >
        <View style={[styles.container, defaultStyle]}>
          {data.content}
        </View>
      </Modal>
    );
  },
);

GlobalModal.displayName = 'GlobalModal';

export default GlobalModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
