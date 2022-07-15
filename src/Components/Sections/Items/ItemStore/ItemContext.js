import React from 'react';

const ItemContext = React.createContext({
  items: [],
  selectItem: (item) => {},
  deselectItem: (id) => {},
  addCartItem: (item) => {},
  removeCartItem: (id) => {},
});

export default ItemContext;
