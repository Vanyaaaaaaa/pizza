import React from 'react';
import { Context } from '../../Context';
import debounce from 'lodash.debounce';

export function Search() {
  const [value, setValue] = React.useState();
  const { inputValue, setInputValue } = React.useContext(Context);

  const inputRef = React.useRef();

  const onClickClear = () => {
    setInputValue('');
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setInputValue(str);
    }, 250),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className="header__search">
      <img className="search__icon__loupe" width={20} src="./img/search.svg" alt="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChangeInput(e)}
        className="search"
        type="text"
        placeholder="Поиск пиццы"
      />
      {inputValue && (
        <img
          onClick={onClickClear}
          className="search__icon__del"
          width={18}
          src="./img/delSearch.svg"
          alt="search"
        />
      )}
    </div>
  );
}
