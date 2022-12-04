import { MutableRefObject } from "react";
import { ModalData } from "./GlobalModal";

export type GlobalModalRef = {
  show: () => void;
  hide: () => void;
};

export default class ModalController {
  static modalRef: MutableRefObject<GlobalModalRef>;
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
