import React from 'react';
import Card from '../../UI/Card';
import pimg from './logo.png';
import classes from './ItemCard.module.css';

const ItemCard = (props, el) => {
  let { name, price, stock } = el;

  return (
    <Card className={classes.card}>
      <div>
        <img src={pimg} alt=''/>
        <div style={{ fontSize: '18px' }}>{name}</div>
        <div style={{ color: 'gray' }}>${price}</div>
        <button onClick={props.toggleTab} className={classes.button}>Purchase</button>
      </div>
    </Card>
  );
};

export default ItemCard;
