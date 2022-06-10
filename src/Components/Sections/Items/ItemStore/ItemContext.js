import React from 'react';

const ItemContext = React.createContext({
  items: [],
  selectItem: (item) => {},
  deselectItem: (id) => {},
});

export default ItemContext;
