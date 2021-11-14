import React from 'react';
import './Header.css';
import JoinUs from '../../JoinUs/JoinUs';
import HeaderMain from './HeaderMain/HeaderMain';
const Header = () => {
  return (

    <div className="hederHighlight">
      <HeaderMain></HeaderMain>
      <JoinUs></JoinUs>
    </div>
  );
};

export default Header;