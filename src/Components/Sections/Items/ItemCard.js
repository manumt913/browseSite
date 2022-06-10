import React, { useContext } from 'react';
import Card from '../../UI/Card';
import pimg from './logo.png';
import classes from './ItemCard.module.css';
import ItemContext from './ItemStore/ItemContext';

const ItemCard = (props) => {
  const itemCtx = useContext(ItemContext);

  const sendItemInfo = () => {
    itemCtx.deselectItem()
    itemCtx.selectItem({
      id: props.id,
      name: props.name,
      price: props.price,
      stock: props.stock,
      description: props.description,
    });
  };

  return (
    <Card className={classes.card}>
      <div>
        <img src={pimg} alt="" />
        <div style={{ fontSize: '18px' }}>{props.name}</div>
        <div style={{ color: 'gray' }}>${props.price}</div>
        <button onClick={sendItemInfo} className={classes.button}>
          Details
        </button>
      </div>
    </Card>
  );
};

export default ItemCard;
