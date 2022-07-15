import React from 'react';
import classes from './CartItem.module.css'

const CartItem = (props) => {
  return (
    <li className={classes.CartItem}>
      <h2>{props.name}</h2>
      <div className={classes.ItemData}>
        <span className={classes.Price}>${props.price}</span>
        <span className={classes.Stock}>1</span>
      </div>
      <div className={classes.CartButtons}>
        <button>+</button>
        <button>-</button>
      </div>
    </li>
  );
};

export default CartItem;
