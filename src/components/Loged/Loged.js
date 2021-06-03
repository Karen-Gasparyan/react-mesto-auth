import React from 'react';

import burgerMenu from '../../images/burger-menu.svg';
import closeMenuBtn from '../../images/close-menu-Icon.svg';

import './Loged.css';


const Loged =({changeHeaderMenu, headerMenuBurger})=> {

  return (
    <button
      className="loged__switch-button"
      onClick={changeHeaderMenu} >
      <img src={headerMenuBurger ? burgerMenu : closeMenuBtn} alt="" />
    </button>
  )
}

export default Loged;