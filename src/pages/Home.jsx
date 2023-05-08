import React from "react";
// import qs from 'qs';
import { useSelector } from "react-redux";
import { Categories } from "../components/Categories";
import { Card } from "../components/Card";
import { Sort } from "../components/Sort";
import { Context } from "../Context";
import { Loader } from "../components/Loader";
import { Pagination } from "../components/Pagination";
import { filterState } from "../redux/slices/filterSlice";
import { itemsPizza, statusItemsPizza } from "../redux/slices/pizzaSlice";
export function Home() {
  const { categories, setCountPage } = React.useContext(Context);
  // const searchValue = useSelector((state) => state.filter.searchValue);
  // const indexActive = useSelector(indexCategories);
  const items = useSelector(itemsPizza);
  const status = useSelector(statusItemsPizza);
  const { searchValue, indexCategories } = useSelector(filterState);

  let filtrItems =
    searchValue === ""
      ? items
      : items.filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
  // React.useEffect(() => {
  //   const queryString = qs.stringify({
  //     categories,
  //     setCountPage,
  //   });
  //   console.log(queryString);
  // }, [categories, inputValue, setCountPage]);
  return (
    <>
      <div className="sort d-flex align-center justify-between">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">{categories[indexCategories]} пиццы</h2>
      <div className="content__items">
        {status === "loading" ? (
          [...Array(8)].map((i) => <Loader key={i} />)
        ) : status === "success" ? (
          filtrItems.map((item) => <Card key={item.id} {...item} />)
        ) : (
          <div className="content__error-info">
            <h2>Произошла ошибка</h2>{" "}
            <p>К сожалению не получилось подгрузить пиццы</p>
          </div>
        )}
      </div>
      <Pagination onChangePage={(number) => setCountPage(number)} />
    </>
  );
}
