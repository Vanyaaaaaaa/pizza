import React from 'react';
import { Context } from '../../Context';

export function Search() {
  const { inputValue, setInputValue } = React.useContext(Context);
  return (
    <div className="header__search">
      <img className="search__icon__loupe" width={20} src="./img/search.svg" alt="search" />
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="search"
        type="text"
        placeholder="Поиск пиццы"
      />
      {inputValue && (
        <img
          onClick={() => setInputValue('')}
          className="search__icon__del"
          width={18}
          src="./img/delSearch.svg"
          alt="search"
        />
      )}
    </div>
  );
}
