import React from 'react';

export function Card({ title, price, imageUrl, sizes }) {
  const [count, addCount] = React.useState(0);
  const dough = ['Тонкое', 'Традиционное'];
  const [typeDough, setTypeDough] = React.useState(0);
  const [sizeDough, setSizeDough] = React.useState(0);
  const addPizza = () => {
    addCount(count + 1);
  };

  return (
    <div className="pizza_block">
      <img src={imageUrl} alt="" className="pizza_block__image" />
      <h4 className="pizza_block__title">{title}</h4>
      <div className="pizza_block__selector">
        <ul>
          {dough.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setTypeDough(index)}
                className={index == typeDough ? 'active' : ''}>
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
                onClick={() => setSizeDough(index)}
                className={index === sizeDough ? 'active' : ''}>
                {item} см.
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pizza_block__bottom">
        <div className="pizza_block__price">от {price} ₽</div>
        <div onClick={addPizza} className="button button__outline button_add">
          <img width={12} height={12} src="./img/plusWhite.svg" alt="plus" />
          <span>Добавить</span>
          <i className="count">{count > 0 ? count : 0}</i>
        </div>
      </div>
    </div>
  );
}
