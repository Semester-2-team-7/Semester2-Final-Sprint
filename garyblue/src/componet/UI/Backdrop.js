import classes from "./Modal.module.css";
// provides the background for the modal
const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop} />;
};

export default Backdrop;
