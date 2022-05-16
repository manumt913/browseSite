import React from 'react';
import ItemCard from './ItemCard';
import classes from './Items.module.css';

const Items = () => {
  return (
    <>
      <div className={classes.Items}>
        <ItemCard />
      </div>
    </>
  );
};

export default Items;
