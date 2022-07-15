import React, { useState, useEffect, useContext } from 'react';
import Modal from '../../../UI/Modal';
import ItemContext from '../ItemStore/ItemContext';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(ItemContext);

  const addItemHandler = (item) => {
    cartCtx.selectItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.deselectItem(id);
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          price={item.price}
          stock={item.stock}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <>
      <Modal openModal={props.openModal} closeModal={props.closeModal}>
        {cartItems}
        <button className={classes.cartItem}>
          Close
        </button>
      </Modal>
    </>
  );
};

export default Cart;
