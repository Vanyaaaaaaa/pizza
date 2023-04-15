import React from 'react';
import { Item } from './CartItem';
import { useDispatch, useSelector } from 'react-redux';

export function Cart() {
  let items = useSelector((state) => state.cart.items);
  console.log(items);
  return (
    <div>
      <div className="container-cart">
        {items.length > 0 ? (
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">
                <img width={30} src="./img/cart1.svg" alt="cart" />
                Корзина
              </h2>
              <div className="cart__clear">
                <img width={20} src="./img/clean.svg" alt="clean" />
                <span>Очистить корзину</span>
              </div>
            </div>
            {items.map((item) => {
              return <Item key={item.id} {...item} />;
            })}
          </div>
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
