import React from "react";
import { Context } from "../../Context";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

export function Search() {
  const [value, setValue] = React.useState();
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filter.searchValue);
  // const { inputValue, setInputValue } = React.useContext(Context);

  const inputRef = React.useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 250),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className="header__search">
      <img
        className="search__icon__loupe"
        width={20}
        src="./img/search.svg"
        alt="search"
      />
      <input
        ref={inputRef}
        value={value}
        maxLength={25}
        onChange={(e) => onChangeInput(e)}
        className="search"
        type="text"
        placeholder="Поиск пиццы"
      />
      {searchValue && (
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
