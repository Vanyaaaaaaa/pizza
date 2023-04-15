import React from 'react';
import { setIndexSort } from '../redux/slices/filterSlice';
import { Context } from '../Context';
import { useDispatch, useSelector } from 'react-redux';

export function Sort() {
  const [sortActive, setSortActive] = React.useState(false);
  const { sortList } = React.useContext(Context);
  const indexSort = useSelector((state) => state.filter.indexSort);
  const dispatch = useDispatch();
  let sortItem = sortList[indexSort];

  return (
    <div
      tabIndex="1"
      onBlur={() => setSortActive(false)}
      onClick={() => setSortActive(!sortActive)}
      className="sort">
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
                  onClick={() => dispatch(setIndexSort(index))}
                  className={indexSort === index ? 'active' : ''}>
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
