import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../redux/slices/cartSlice';

const types = ['Тонкое', 'Традиционное'];

export function Card({ id, title, price, imageUrl, sizes }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
  const [type, setType] = React.useState(0);
  const [size, setSize] = React.useState(0);

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: types[type],
      size: sizes[size],
    };
    dispatch(addItem(item));
  };

  return (
    <div className="pizza-wrapper">
      <div className="pizza_block">
        <img src={imageUrl} alt="" className="pizza_block__image" />
        <h4 className="pizza_block__title">{title}</h4>
        <div className="pizza_block__selector">
          <ul>
            {types.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setType(index)}
                  className={index == type ? 'active' : ''}>
                  {item}
                </li>
              );
            })}
          </ul>
          <ul>
            {sizes.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setSize(index)}
                  className={index === size ? 'active' : ''}>
                  {item} см.
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pizza_block__bottom">
          <div className="pizza_block__price">от {price} ₽</div>
          <div onClick={() => onClickAdd()} className="button button__outline button_add">
            <img width={12} height={12} src="./img/plusWhite.svg" alt="plus" />
            <span>Добавить</span>
            {cartItem && <i className="count">{cartItem.count}</i>}
          </div>
        </div>
      </div>
    </div>
  );
}
