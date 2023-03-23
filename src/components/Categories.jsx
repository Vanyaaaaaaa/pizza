import React from 'react';
import { Context } from '../Context';

export function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const { categoriesIndex, setCategoriesIndex } = React.useContext(Context);

  return (
    <div className="content__top">
      <div className="categories">
        <ul>
          {categories.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setCategoriesIndex(index)}
                className={categoriesIndex === index ? 'active' : ''}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
