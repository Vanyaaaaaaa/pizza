import React from 'react';
import { Categories } from '../components/Categories';
import { Card } from '../components/Card';
import { Sort } from '../components/Sort.jsx';
import { Context } from '../Context';
import { Loader } from '../components/Loader';

export function Home({ items }) {
  const { loader, categories, categoriesIndex, inputValue } = React.useContext(Context);
  let filtrItems =
    inputValue === ''
      ? items
      : items.filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()));
  return (
    <>
      <div className="sort d-flex align-center justify-between">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">{categories[categoriesIndex]} пиццы</h2>
      <div className="content__items">
        {loader
          ? filtrItems.map((item) => <Card key={item.id} {...item} />)
          : [...Array(8)].map((i) => <Loader key={i} />)}
      </div>
    </>
  );
}
