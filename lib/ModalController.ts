import { MutableRefObject } from "react";
import { ModalData } from "./GlobalModal";

export type GlobalModalRef = {
  show: (data: ModalData) => void;
  hide: () => void;
};

class ModalControllerClass {
  private static modalRef: MutableRefObject<GlobalModalRef> | null = null;

  static setModalRef = (ref: MutableRefObject<GlobalModalRef>) => {
    this.modalRef = ref;
  };

  static show = (data: ModalData) => {
    if (!this.modalRef?.current) {
      console.warn('Modal reference not set. Make sure GlobalModal is mounted.');
      return;
    }
    this.modalRef.current.show(data);
  };

  static hide = () => {
    if (!this.modalRef?.current) {
      console.warn('Modal reference not set. Make sure GlobalModal is mounted.');
      return;
    }
    this.modalRef.current.hide();
  };
}

export default ModalControllerClass;
