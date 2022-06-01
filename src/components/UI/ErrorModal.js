import classes from "./ErrorModal.module.css";
import React from "react";
import Button from "./Button";
import Card from "./Card";
import  ReactDOM  from "react-dom";
const Backdrop = (props) => {
  return (
    <div
      className={classes.backdrop}
      onClick={() => props.setError(false)}
    ></div>
  );
};

const Overlay = (props) => {
 return <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
      <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={() => props.setError(false)}>Close</Button>
    </footer>
  </Card>;
};
function ErrorModal(props) {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop setError={props.setError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          setError={props.setError}
        />,
        document.getElementById("root")
      )}
    </div>
  );
}

export default ErrorModal;
