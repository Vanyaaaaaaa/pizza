import React, { createContext } from 'react';
import axios from 'axios';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Cart } from './pages/Cart/Cart';
import './index.scss';
import { Routes, Route } from 'react-router-dom';
import { Context } from './Context';

function App() {
  const [pizzaItems, addPizzaItems] = React.useState([]);
  const [loader, setLoader] = React.useState(false);

  const fetchData = async () => {
    try {
      const items = await axios.get('http://localhost:3001/pizza');
      addPizzaItems(items.data);
      setLoader(true);
      console.log(items.data);
    } catch (error) {
      alert('Ошибка при подгрузке данных');
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Context.Provider value={loader}>
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
