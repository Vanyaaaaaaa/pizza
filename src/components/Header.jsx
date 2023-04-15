import React from 'react';
import { Link } from 'react-router-dom';
import './Header';
import { Search } from './Search';
import { useSelector } from 'react-redux';

export function Header() {
  const { totalPrice, items } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

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
        <Search />
        <div className="header__cart">
          <Link to="/cart" className="button button__cart">
            <span>{totalPrice} ₽</span>
            <div className="button__delimiter"></div>
            <img width={15} src="./img/cart.svg" alt="cart" />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
