import React from 'react';
import { Context } from '../Context';

export function Sort() {
  const [sortActive, setSortActive] = React.useState(false);
  const { sortIndex, setSortIndex, sortList } = React.useContext(Context);
  let sortItem = sortList[sortIndex];

  return (
    <div onClick={() => setSortActive(!sortActive)} className="sort">
      <div className="sort__label">
        <img src="./img/arrow.svg" className={`sort__label ${sortActive ? 'active' : ''}`} />
        <b>Сортировка по:</b>
        <span>{sortItem.name}</span>
        <div className={`sort__popup ${sortActive ? 'sort__open' : ''}`}>
          <ul>
            {sortList.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setSortIndex(index)}
                  className={sortIndex === index ? 'active' : ''}>
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
