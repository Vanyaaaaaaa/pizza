import React from 'react';
import Style from './Header.module.scss';
import '.';

export function Header() {
  return (
    <div className={Style.header}>
      <div className={`container ${Style.container}`}>
        <div className={Style.header__logo}>
          <img width={38} src="./img/logo.svg" alt="logo" />
          <div>
            <h1>REACT PIZZA</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className={Style.header__cart}>
          <a className={`button ${Style.button__cart}`}>
            <span>520 ₽</span>
            <div className={Style.button__delimiter}></div>
            <img width={15} src="./img/cart.svg" alt="cart" />
            <span>2</span>
          </a>
        </div>
      </div>
    </div>
  );
}
