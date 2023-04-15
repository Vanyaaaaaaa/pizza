import React from 'react';
// import qs from 'qs';
import { useSelector } from 'react-redux';
import { Categories } from '../components/Categories';
import { Card } from '../components/Card';
import { Sort } from '../components/Sort.jsx';
import { Context } from '../Context';
import { Loader } from '../components/Loader';
import { Pagination } from '../components/Pagination';

export function Home({ items }) {
  const { loader, categories, inputValue, setCountPage } = React.useContext(Context);
  const indexActive = useSelector((state) => state.filter.indexCategories);
  let filtrItems =
    inputValue === ''
      ? items
      : items.filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()));
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
      <h2 className="content__title">{categories[indexActive]} пиццы</h2>
      <div className="content__items">
        {loader
          ? filtrItems.map((item) => <Card key={item.id} {...item} />)
          : [...Array(8)].map((i) => <Loader key={i} />)}
      </div>
      <Pagination onChangePage={(number) => setCountPage(number)} />
    </>
  );
}
