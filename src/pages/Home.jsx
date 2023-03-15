import React from 'react';
import { Categories } from '../components/Categories';
import { Card } from '../components/Card';

export function Home() {
  return (
    <>
      <Categories />
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
