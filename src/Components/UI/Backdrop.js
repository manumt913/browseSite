import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = (props) => {
  return props.openModal ? (
    <div onClick={props.closeModal} className={classes.Backdrop} />
  ) : null;
};

export default Backdrop;

//export default Backdrop;
