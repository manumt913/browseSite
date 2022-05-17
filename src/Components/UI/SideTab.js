import React from 'react';
import classes from './SideTab.module.css';

const SideTab = (props) => {
  return (
    <div className={`${classes.SideTab} ${props.isShown ? classes.Open : classes.Close}`}>
      <div className={classes.Image}>Image goes here</div>
      <div className={classes.lineDiv} />
      <h2 style={{ alignSelf: 'center' }}>Cool Item</h2>
      <div className={classes.StockData}>
        <div>Price: $12</div>
        <div>52 Available</div>
      </div>
      <div className={classes.Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <button className={classes.Button}>Add to Cart</button>
    </div>
  );
};

export default SideTab;
