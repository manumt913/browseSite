import React, {useReducer, useState} from 'react';
import ItemContext from './ItemContext';

const defaultItemState = {
  items: [],
}

const itemReducer = (state, action) => {
  if (action.type === 'SELECT') {
    const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
    }
  }
  return defaultItemState;
}

const ItemProvider = (props) => {
  const [itemState, dispatchItemAction] = useReducer(itemReducer, defaultItemState);
  
  const selectItemFromCard = (item) => {
    dispatchItemAction({type: 'SELECT', item: item});
  };

  const deselectItemFromTab = (id) => {
    dispatchItemAction({type: 'DESELECT', id})
  }

  const itemContext = {
    items: itemState.items,
    selectItem: selectItemFromCard,
    deselectItem: deselectItemFromTab,
  };

  return (
    <ItemContext.Provider value={itemContext}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
