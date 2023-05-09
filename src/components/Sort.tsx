import React from "react";
import { setIndexSort, setAscDesc } from "../redux/slices/filterSlice";
import { Context } from "../Context";
import { useDispatch, useSelector } from "react-redux";

type sortListType = {
  name: string;
  sort: string;
};

export const sortList: sortListType[] = [
  { name: "популярности", sort: "rating" },
  { name: "цене", sort: "price" },
  { name: "алфавиту", sort: "title" },
];

export const Sort: React.FC = () => {
  const [sortActive, setSortActive] = React.useState(false);
  // const { sortList } = React.useContext(Context);
  const indexSort = useSelector((state) => state.filter.indexSort);
  const checkAscDesc = useSelector((state) => state.filter.ascDesc);

  const dispatch = useDispatch();
  let sortItem = sortList[indexSort];

  return (
    <div tabIndex={1} onBlur={() => setSortActive(false)} className="sort">
      <div className="sort__label">
        <div className="sort__block">
          <img
            onClick={() => dispatch(setAscDesc())}
            src="./img/arrow.svg"
            className={`sort__label ${checkAscDesc ? "active" : ""}`}
          />
          <div onClick={() => setSortActive(!sortActive)}>
            <b>Сортировка по:</b>
            <span>{sortItem.name}</span>
            <div className={`sort__popup ${sortActive ? "sort__open" : ""}`}>
              <ul>
                {sortList.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => dispatch(setIndexSort(index))}
                      className={indexSort === index ? "active" : ""}
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
