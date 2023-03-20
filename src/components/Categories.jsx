import React from 'react';

export function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const changeCateg = (id) => {
    setActiveIndex(id);
  };

  return (
    <div className="content__top">
      <div className="categories">
        <ul>
          {categories.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => changeCateg(index)}
                className={activeIndex === index ? 'active' : ''}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
