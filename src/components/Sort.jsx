import React from 'react';

export function Sort() {
  const sortList = ['популярности', 'цене', 'алфавиту'];
  const [sortActive, setSortActive] = React.useState(false);
  const [sort, setSort] = React.useState(0);
  let sortItem = sortList[sort];

  return (
    <div onClick={() => setSortActive(!sortActive)} className="sort">
      <div className="sort__label">
        <img src="./img/arrow.svg" className={`sort__label ${sortActive ? 'active' : ''}`} />
        <b>Сортировка по:</b>
        <span>{sortItem}</span>
        <div className={`sort__popup ${sortActive ? 'sort__open' : ''}`}>
          <ul>
            {sortList.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setSort(index)}
                  className={sort === index ? 'active' : ''}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
