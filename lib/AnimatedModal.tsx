import React, {
  useRef,
  forwardRef,
  useLayoutEffect,
  useImperativeHandle,
} from "react";
import {
  Modal,
  StyleSheet,
  Dimensions,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import AnimatedModalController, {
  AnimatedModalRef,
} from "./AnimatedModalController";
import Title from "./components/title/Title";
import Button, { ButtonProps } from "./components/button/Button";
import OutlineButton, {
  OutlineButtonProps,
} from "./components/outline-button/OutlineButton";
import useStateWithCallback from "./helpers/useStateWithCallback";

const { width: ScreenWidth } = Dimensions.get("screen");

export interface AnimatedModalProps {
  title: string;
  description: string;
  primaryButtonText: string;
  outlineButtonText: string;
  onPrimaryButtonPress: () => void;
  onOutlineButtonPress: () => void;
  // Optionals
  TouchableComponent?: any;
  buttonProps?: ButtonProps;
  outlineButtonProps?: OutlineButtonProps;
  style?: StyleProp<ViewStyle>;
  buttonsContainerStyle?: StyleProp<ViewStyle>;
  onShow?: () => void;
  onHide?: () => void;
}

const AnimatedModal: React.FC<AnimatedModalProps> = forwardRef(
  ({
    style,
    buttonsContainerStyle,
    title,
    description,
    primaryButtonText,
    outlineButtonText,
    buttonProps,
    outlineButtonProps,
    onShow,
    onHide,
    onPrimaryButtonPress,
    onOutlineButtonPress,
    TouchableComponent,
    ...rest
  }) => {
    const modalRef = useRef<AnimatedModalRef>();
    const [modalVisible, setModalVisible] = useStateWithCallback(false);

    useLayoutEffect(() => {
      AnimatedModalController.setModalRef(modalRef);
    }, []);

    useImperativeHandle(
      modalRef,
      () => ({
        show: () => {
          setModalVisible(true, () => {
            onShow?.();
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
      <Modal
        animationType="fade"
        transparent
        {...rest}
        onRequestClose={AnimatedModalController.hide}
        visible={modalVisible}
      >
        <View style={[styles.container, style]}>
          <Title
            title={title}
            description={description}
            onClosePress={AnimatedModalController.hide}
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
    padding: 24,
    marginTop: "50%",
    borderRadius: 16,
    backgroundColor: "#fff",
    width: ScreenWidth * 0.9,
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 16,
    alignSelf: "center",
  },
  buttonsContainer: {
    marginTop: 16,
    marginLeft: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  outlineButton: {
    marginLeft: 16,
  },
});
