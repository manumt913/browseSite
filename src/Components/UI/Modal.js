import React, { useState, useEffect } from 'react';
import Backdrop from './Backdrop';
import classes from './Modal.module.css';

export default function Modal(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const modalDisplay = (
    <>
      <Backdrop closeModal={props.closeModal} openModal={props.openModal} />
      <div
        className={`${classes.Modal} ${
          props.openModal ? classes.OpenModal : classes.CloseModal
        }`}
      >
        {props.children}
      </div>
    </>
  );

  return <>{modalDisplay}</>;
}
