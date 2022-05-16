import React from 'react';
import Card from '../../UI/Card';
import pimg from './logo.png';
import classes from './ItemCard.module.css';

const ItemCard = () => {
  return (
    <Card className={classes.card}>
      <div>
        <img src={pimg} alt=''/>
        <div style={{ fontSize: '18px' }}>Cool Item</div>
        <div style={{ color: 'gray' }}>12 Jillion Sandcoin</div>
        <button className={classes.button}>Purchase</button>
      </div>
    </Card>
  );
};

export default ItemCard;
