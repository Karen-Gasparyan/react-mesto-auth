import React from 'react';

import './header.css';


function Header({component: Component}) {
  return (
    <div className="header page__header">
      <div className="header__logo"></div>
      <div className="header__component">
        <Component />
      </div>
    </div>
  )
}

export default Header;