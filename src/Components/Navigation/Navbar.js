import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={classes.navbar}>
      <div className={classes.logo}>browseSite</div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/browse"
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              Browse
            </NavLink>
          </li>
          <li>
            <div className={classes['shopping-cart']}>
              <NavLink
                to="/checkout"
                className={(navData) =>
                  navData.isActive ? classes.active : ''
                }
              />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
