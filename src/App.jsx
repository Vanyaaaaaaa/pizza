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
      const items = await axios.get('http://localhost:3000/pizza');
      addPizzaItems(items.data);
    } catch (error) {
      alert('Ошибка при подгрузке данных');
      console.error(error);
    }
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
          {/* <Cart /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
