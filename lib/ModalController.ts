import { MutableRefObject } from "react";
import { ModalData } from "./GlobalModal";

export type GlobalModalRef = {
  show: (data: ModalData) => void;
  hide: () => void;
};

let modalRef: MutableRefObject<GlobalModalRef> | null = null;

const ModalController = {
  setModalRef: (ref: MutableRefObject<GlobalModalRef>) => {
    modalRef = ref;
  },
  show: (data: ModalData) => {
    if (!modalRef?.current) {
      console.warn(
        "Modal reference not set. Make sure GlobalModal is mounted.",
      );
      return;
    }
    modalRef.current.show(data);
  },
  hide: () => {
    if (!modalRef?.current) {
      console.warn(
        "Modal reference not set. Make sure GlobalModal is mounted.",
      );
      return;
    }
    modalRef.current.hide();
  },
};

export default ModalController;
