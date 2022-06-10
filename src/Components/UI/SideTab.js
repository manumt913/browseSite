import React, { useContext } from 'react';
import classes from './SideTab.module.css';
import ItemContext from '../Sections/Items/ItemStore/ItemContext';

const SideTab = (props) => {
  const itemCtx = useContext(ItemContext);
  console.log(itemCtx.items);

  const tabDiv =  <div
  className={`${classes.SideTab} ${
    props.isShown ? (classes.Open) : classes.Close
  }`}
>
  <div className={classes.Image}>Image goes here</div>
  <div className={classes.lineDiv} />
  <h2 style={{ alignSelf: 'center', margin: '10px' }}>{itemCtx.items.name}</h2>
  <div className={classes.StockData}>
    <div>$ {itemCtx.items.price}</div>
    <div>52 Available</div>
  </div>
  <div className={classes.Description}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.
  </div>
  <button className={classes.Button} onClick={props.openModal}>
    Add to Cart
  </button>
</div>

  return (
   <>
   {props.isShown && (tabDiv)}
   </>
    );
  };

export default SideTab;
