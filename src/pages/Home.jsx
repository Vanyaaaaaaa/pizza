import React from 'react';
import { Categories } from '../components/Categories';
import { Card } from '../components/Card';
import { Sort } from '../components/Sort.jsx';

export function Home({ items }) {
  return (
    <>
      <div className="d-flex align-center justify-between">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
