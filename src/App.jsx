import React from 'react';
import { useSelector } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Cart } from './pages/Cart/Cart';
import './index.scss';
import { Routes, Route } from 'react-router-dom';
import { Context } from './Context';
import { setFilters } from './redux/slices/filterSlice';
import { useDispatch } from 'react-redux';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pizzaItems, addPizzaItems] = React.useState([]);
  const [loader, setLoader] = React.useState(false);
  const sortIndex = useSelector((state) => state.filter.indexSort);
  const [inputValue, setInputValue] = React.useState('');
  const [countPage, setCountPage] = React.useState(0);
  const categoriesIndex = useSelector((state) => state.filter.indexCategories);
  const sortList = [
    { name: 'популярности', sort: 'rating' },
    { name: 'цене', sort: 'price' },
    { name: 'алфавиту', sort: 'title' },
  ];
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  const fetchData = async () => {
    try {
      setLoader(false);
      const categ = categoriesIndex > 0 ? `category=${categoriesIndex}` : '';
      const sort = sortList[sortIndex].sort;
      const sortAscDesc = categoriesIndex === 2 ? `asc` : `desc`;
      const items = await axios.get(
        `http://localhost:3001/pizza?_page=${countPage}&_limit=8&${categ}&_sort=${sort}&_order=${sortAscDesc}`,
      );
      addPizzaItems(items.data);
      setLoader(true);
      const queryString = qs.stringify({
        sort,
        categoriesIndex,
        countPage,
      });
      navigate(`?${queryString}`);
    } catch (error) {
      alert('Ошибка при подгрузке данных');
      console.error(error);
    }
  };

  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));
  //     const sort = sortList.find((obj) => (obj.sort === params.sort ? obj.sort : null));
  //     console.log(sort);
  //     dispatch(
  //       setFilters({
  //         ...params,
  //         sort,
  //       }),
  //     );
  //   }
  // }, []);

  React.useEffect(() => {
    fetchData();
  }, [categoriesIndex, sortIndex, countPage]);

  return (
    <Context.Provider
      value={{
        loader,
        inputValue,
        sortList,
        categories,
        setInputValue,
        setCountPage,
      }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home items={pizzaItems} />} />
              <Route path="/Cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
