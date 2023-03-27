import React from 'react';
import { Context } from '../Context';

export function Categories() {
  const { categoriesIndex, setCategoriesIndex, categories } = React.useContext(Context);

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
