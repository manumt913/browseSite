import React, { useState, useEffect } from 'react';
import classes from './Browse.module.css';
import useFetch from '../../Hooks/useFetch';
import SideTab from '../UI/SideTab';
import ItemCard from './Items/ItemCard';
import Modal from '../UI/Modal';
import ItemProvider from './Items/ItemStore/ItemProvider';
import Cart from './Items/Cart/Cart';

const Browse = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);

  const { isLoading, error, sendRequest: fetchItems } = useFetch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const loadItems = (itemObj) => {
      const loadedItem = [];

      for (const key in itemObj) {
        loadedItem.push({
          id: key,
          name: itemObj[key].name,
          description: itemObj[key].description,
          price: itemObj[key].price,
          stock: itemObj[key].stock,
        });
      }
      setItems(loadedItem);
    };

    fetchItems(
      {
        url: 'https://browse-app-6069c-default-rtdb.firebaseio.com/items.json',
      },
      loadItems
    );
  }, [fetchItems]);


  const cardDisplay = items.map((el) => (
    <ItemCard
      id={el.id}
      key={el.id}
      name={el.name}
      price={el.price}
      stock={el.stock}
      description={el.description}
    />
  ));

  return (
    <ItemProvider>
      <Cart openModal={showModal} closeModal={toggleModal} />
      <SideTab openModal={toggleModal} />
      {isLoading ? (
        <p>Loading data...</p>
      ) : (
        <div className={classes.browse}>{cardDisplay}</div>
      )}
    </ItemProvider>
  );
};

export default Browse;
