import React from 'react';
import axios from 'axios';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Cart } from './pages/Cart/Cart';
import './index.scss';

function App() {
  const [pizzaItems, addPizzaItems] = React.useState([]);

  const fetchData = async () => {
    try {
      const items = await fetch('http://localhost:3001/pizza').then((res) => res.json());
      addPizzaItems(items);
    } catch (error) {
      alert('Произошла ошибка при загрузке пицц');
      console.error(error);
    }
    // try {
    //   const items = await axios.get('http://localhost:3001/pizza');
    //   addPizzaItems(items.data);
    //   console.log(items.data);
    // } catch (error) {
    //   alert('Ошибка при подгрузке данных');
    //   console.error(error);
    // }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Home items={pizzaItems} />
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
