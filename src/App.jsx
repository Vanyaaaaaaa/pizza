import React from "react";
import { useSelector } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Cart } from "./pages/Cart/Cart";
import { PizzaPage } from "./components/PizzaPage";
import { NotFoundPage } from "./components/NotFoundPage";
import "./index.scss";
import { Routes, Route } from "react-router-dom";
import { Context } from "./Context";
import { useDispatch } from "react-redux";
import { fetchPizzas } from "./redux/slices/pizzaSlice";
import { filterState } from "./redux/slices/filterSlice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { indexSort, indexCategories, ascDesc } = useSelector(filterState);
  const [inputValue, setInputValue] = React.useState("");
  const [countPage, setCountPage] = React.useState(0);
  const sortList = [
    { name: "популярности", sort: "rating" },
    { name: "цене", sort: "price" },
    { name: "алфавиту", sort: "title" },
  ];
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const pizzaGet = async () => {
    try {
      const categ = indexCategories > 0 ? `category=${indexCategories}` : "";
      const sort = sortList[indexSort].sort;
      const sortAscDesc = ascDesc ? `asc` : `desc`;
      dispatch(
        fetchPizzas({
          categ,
          sort,
          sortAscDesc,
          countPage,
        })
      );
      const queryString = qs.stringify({
        sort,
        indexCategories,
        countPage,
      });
      navigate(`?${queryString}`);
    } catch (error) {
      alert("Ошибка при подгрузке данных");
      console.error(error);
    }
    window.scrollTo(0, 0);
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
    pizzaGet();
  }, [indexCategories, indexSort, countPage, ascDesc]);

  return (
    <Context.Provider
      value={{
        inputValue,
        sortList,
        categories,
        setInputValue,
        setCountPage,
      }}
    >
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<PizzaPage />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
