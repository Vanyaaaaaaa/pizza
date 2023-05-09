import React from "react";
import { setIndexCategories } from "../redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";
import { Context } from "../Context";

export const Categories: React.FC = () => {
  const { categories } = React.useContext(Context);

  const indexCategories = useSelector((state) => state.filter.indexCategories);
  const dispatch = useDispatch();
  return (
    <div className="content__top">
      <div className="categories">
        <ul>
          {categories.map((item, indexList) => {
            return (
              <li
                key={indexList}
                onClick={() => dispatch(setIndexCategories(indexList))}
                className={indexCategories === indexList ? "active" : ""}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
