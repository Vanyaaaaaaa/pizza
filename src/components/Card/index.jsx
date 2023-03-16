import React from 'react';
import Style from './Card.module.scss';

export function Card({ title, price, imgUrl }) {
  return (
    <div className={Style.pizza_block}>
      <img src="./img/pizza1.jpeg" alt="" className={Style.pizza_block__image} />
      <h4 className={Style.pizza_block__title}>{title}</h4>
      <div className={Style.pizza_block__selector}>
        <ul>
          <li className={Style.active}>Тонкое</li>
          <li>Традиционное</li>
        </ul>
        <ul>
          <li className={Style.active}>26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li>
        </ul>
      </div>
      <div className={Style.pizza_block__bottom}>
        <div className={Style.pizza_block__price}>от {price} ₽</div>
        <div className={`button ${Style.button__outline} ${Style.button_add}`}>
          <img width={12} height={12} src="./img/plusWhite.svg" alt="plus" />
          <span>Добавить</span>
          {/* <i>3</i> */}
        </div>
      </div>
    </div>
  );
}
