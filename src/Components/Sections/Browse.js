import React, {useState} from 'react';
import SideTab from '../UI/SideTab';
import Items from './Items/Items';

const Browse = () => {
  const [showSideTab, setShowSideTab] = useState(false);

  const toggleSideTab = () => {
    setShowSideTab(!showSideTab);
  }
  
  return (
    <>
      <SideTab isShown={showSideTab}/>
      <Items toggleTab={toggleSideTab}/>
    </>
  );
};

export default Browse;
