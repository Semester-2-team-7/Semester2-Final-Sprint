import React from "react";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import ReactDOM from "react-dom";
//modal creates a overlay for cart. The portal provides correct html symantics
const portal = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onHideCart} />, portal)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portal
      )}
    </React.Fragment>
  );
};

export default Modal;
