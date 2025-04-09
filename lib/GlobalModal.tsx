import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
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

    useImperativeHandle(
      ref,
      () => ({
        show: (_data: ModalData) => {
          setData(_data, () => {
            setModalVisible(true, () => {
              _data.onShow?.();
            });
          });
        },
        hide: () => {
          setModalVisible(false, () => {
            data.onHide?.();
          });
        },
      }),
      [data.onHide, setData, setModalVisible],
    );

    return (
      <Modal {...rest} isVisible={modalVisible}>
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
