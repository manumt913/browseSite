import React, {useState} from 'react';
import Navbar from '../Navigation/Navbar';
import Browse from '../Sections/Browse';
import Modal from '../UI/Modal';

const Layout = (props) => {
  

  return (
    <main>
      <Navbar />
      <Browse />
    </main>
  );
};

export default Layout;
