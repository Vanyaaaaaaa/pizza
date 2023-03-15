import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Cart } from './pages/Cart/Cart';
import './index.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          {/* <Home /> */}
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
