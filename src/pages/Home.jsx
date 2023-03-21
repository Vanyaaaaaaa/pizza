import React from 'react';
import { Categories } from '../components/Categories';
import { Card } from '../components/Card';
import { Sort } from '../components/Sort.jsx';
import { Context } from '../Context';
import { Loader } from '../components/Loader';

export function Home({ items }) {
  const loader = React.useContext(Context);

  return (
    <>
      <div className="d-flex align-center justify-between">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loader
          ? items.map((item) => <Card key={item.id} {...item} />)
          : [...Array(8)].map(() => <Loader />)}
      </div>
    </>
  );
}
