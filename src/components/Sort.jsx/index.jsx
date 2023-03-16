import React from 'react';
import Style from './Sort.module.scss';

export function Sort() {
  return (
    <div className={Style.sort}>
      <div className={Style.sort__label}>
        <img src="./img/arrow.svg" />
        <b>Сортировка по:</b>
        <span>популярности</span>
      </div>
    </div>
  );
}
