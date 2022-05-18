import React, {useState} from 'react';
import SideTab from '../UI/SideTab';
import Items from './Items/Items';

const dummyDB = [
  {
    id: 1,
    name: 'Cool Item',
    price: '12',
    stock: '52',
  },
  {
    id: 2,
    name: 'Cool Item 2',
    price: '34',
    stock: '23',
  },
  {
    id: 3,
    name: 'Cool Item 3',
    price: '15',
    stock: '47',
  },
  {
    id: 4,
    name: 'Cool Item 4',
    price: '250',
    stock: '8',
  },
  {
    id: 5,
    name: 'Cool Item 5',
    price: '125',
    stock: '300',
  },
];

const Browse = () => {
  const [showSideTab, setShowSideTab] = useState(false);

  const toggleSideTab = () => {
    setShowSideTab(!showSideTab);
  }

   return (
    <>
      <SideTab isShown={showSideTab}/>
      <Items toggleTab={toggleSideTab} itemData={dummyDB}/>
    </>
  );
};

export default Browse;
