import { MutableRefObject } from "react";

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

  static show = (message?: string) => {
    // @ts-ignore
    this.modalRef.current?.show(message);
  };
  static hide = () => {
    // @ts-ignore
    this.modalRef.current?.hide();
  };
}
