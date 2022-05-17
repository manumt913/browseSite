import React from 'react';
import ItemCard from './ItemCard';
import classes from './Items.module.css';

const Items = (props) => {
  return (
    <>
      <div className={classes.Items}>
        <ItemCard toggleTab={props.toggleTab}/>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </>
  );
};

export default Items;
