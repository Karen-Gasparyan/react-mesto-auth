import React from 'react';

import './header.css';


function Header({component: Component, changeHeaderMenu, headerMenuBurger}) {

  return (
    <div className="header page__header">
      <div className="header__logo"></div>
      <div className="header__component">
        <Component changeHeaderMenu={changeHeaderMenu} headerMenuBurger={headerMenuBurger} />
      </div>
    </div>
  )
}

export default Header;