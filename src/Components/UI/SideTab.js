import React, { useState, useEffect, useContext } from 'react';
import classes from './SideTab.module.css';
import ItemContext from '../Sections/Items/ItemStore/ItemContext';

const SideTab = (props) => {
  const [displayTab, setDisplayTab] = useState(false);
  const itemCtx = useContext(ItemContext);

  useEffect(() => {
    if (itemCtx.items.length === 0) {
      setDisplayTab(false);
    } else {
      setDisplayTab(true);
    }
  }, [itemCtx]);

  const closeTab = () => {
    setDisplayTab(false);
    setTimeout(function () {
      itemCtx.deselectItem();
    }, 500);
  };

  return (
    <div
      className={`${classes.SideTab} 
    // ${displayTab ? classes.Open : classes.Close}
    `}
    >
      {itemCtx.items.length === 0 ? (
        <div>Loading</div>
      ) : (
        <>
          <div className={classes.Image}>
            Image goes here
            <div className={classes.CloseButton} onClick={closeTab}>
              x
            </div>
          </div>
          <div className={classes.lineDiv} />
          <h2 style={{ alignSelf: 'center', margin: '10px' }}>
            {itemCtx.items[0].name}
          </h2>
          <div className={classes.StockData}>
            <div>$ {itemCtx.items[0].price}</div>
            <div>{itemCtx.items[0].stock} Available</div>
          </div>
          <div className={classes.Description}>
            {itemCtx.items[0].description}
          </div>
          <button className={classes.Button} onClick={props.openModal}>
            Add to Cart
          </button>
        </>
      )}
    </div>
  );
};

export default SideTab;
