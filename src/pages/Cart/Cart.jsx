import React from 'react';
import { Item } from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

export function Cart() {
  let items = useSelector((state) => state.cart.items);
  let totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const dispatch = useDispatch();
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
              <div onClick={() => dispatch(clearItems())} className="cart__clear">
                <img width={20} src="./img/clean.svg" alt="clean" />
                <span>Очистить корзину</span>
              </div>
            </div>
            {items.map((item) => {
              return <Item key={item.id} {...item} />;
            })}
            <div className='cart__bottom'>
            <div className='cart__bottom-details'>
              <span>Всего пицц: {totalCount} шт.</span>
              <span>Сумма заказа: <b>{totalPrice} ₽</b></span>
            </div>
            <div className='cart__bottom-buttons'>
              <Link to="/" className='button button-outline button--add go-back-btn'>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <b>Вернуться назад</b>
                </Link>
              <div className='button button-outline button--add pay-btn'>Оплатить сейчас</div>
            </div>
            </div>
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
