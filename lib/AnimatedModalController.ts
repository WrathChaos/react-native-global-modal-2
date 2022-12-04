import { MutableRefObject } from "react";
import { ModalData } from "./AnimatedModal";

export type AnimatedModalRef = {
  show: () => void;
  hide: () => void;
};

export default class AnimatedModalController {
  static modalRef: MutableRefObject<AnimatedModalRef>;
  static setModalRef = (ref: any) => {
    // @ts-ignore
    this.modalRef = ref;
  };

  static show = (data: ModalData) => {
    // @ts-ignore
    this.modalRef.current?.show(data);
  };
  static hide = () => {
    // @ts-ignore
    this.modalRef.current?.hide();
  };
}
