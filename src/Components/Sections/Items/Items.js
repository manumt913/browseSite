import React, { useState } from 'react';
import ItemCard from './ItemCard';
import classes from './Items.module.css';

const Items = (props, itemData) => {
  const cardDisplay = itemData.map((el) => (
    <ItemCard
      key={el.id}
      name={el.name}
      price={el.price}
      toggleTab={props.toggleTab}
    />
  ));

  return (
    <>
      <div className={classes.Items}>{cardDisplay}</div>
    </>
  );
};

export default Items;
