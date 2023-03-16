import React from 'react';
import Style from './Categories.module.scss';

export function Categories() {
  return (
    <div className={Style.content__top}>
      <div className={Style.categories}>
        <ul>
          <li>Все</li>
          <li>Мясные</li>
          <li>Вегетарианская</li>
          <li>Гриль</li>
          <li>Острые</li>
          <li>Закрытые</li>
        </ul>
      </div>
    </div>
  );
}
