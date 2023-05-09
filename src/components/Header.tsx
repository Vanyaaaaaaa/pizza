import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "./Search/index";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";
export const Header: React.FC = () => {
  const { totalPrice, items } = useSelector(selectCart);
  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );
  const location = useLocation();

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
          {location.pathname !== "/cart" && (
            <div>
              <Link to="/cart" className="button button__cart">
                <span>{totalPrice} ₽</span>
                <div className="button__delimiter"></div>
                <img width={15} src="./img/cart.svg" alt="cart" />
                <span>{totalCount}</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
