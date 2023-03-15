import React from 'react';
import { Item } from './Item';

export function Cart() {
  let items = 1;
  return (
    <div>
      <div className="container-cart">
        {items > 0 ? (
          <Item />
        ) : (
          <div className="cart cart__empty">
            <h2>
              Корзина пустая<icon>😕</icon>
            </h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src="./img/empty-cart.png" alt="empty-cart" />
            <a href="/" className="button button__black">
              Вернуться назад
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
