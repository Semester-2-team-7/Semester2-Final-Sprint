import classes from "./Modal.module.css";
// creates a overlay for any componet this is reuseable but is used for the cart.
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default ModalOverlay;
