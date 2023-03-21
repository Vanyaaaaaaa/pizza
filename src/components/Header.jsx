import React from 'react';
import { Link } from 'react-router-dom';
import './Header';

export function Header() {
  return (
    <div className="header">
      <div className="container container">
        <Link to="/">
          <div className="header__logo">
            <img width={38} src="./img/logo.svg" alt="logo" />
            <div>
              <h1>HOTPIZZA</h1>
              <p>самая вкусная пицца в СПб</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart" className="button button__cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <img width={15} src="./img/cart.svg" alt="cart" />
            <span>2</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
