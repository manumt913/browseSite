import React, {useState} from 'react';
import Navbar from '../Navigation/Navbar';
import classes from './Layout.module.css';
import Modal from '../UI/Modal';

const Layout = (props) => {
  

  return (
    <main className={classes.main}>
      <Navbar />
      <main >{props.children}</main>
    </main>
  );
};

export default Layout;
