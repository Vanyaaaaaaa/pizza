import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { itemsPizza } from "../redux/slices/pizzaSlice";

import { addItem } from "../redux/slices/cartSlice";
import axios from "axios";

const types = ["Тонкое", "Традиционное"];

export function PizzaPage() {
  const [data, setData] = React.useState([]);
  // const { imageUrl, title, sizes, description, price } = data;
  const dispatch = useDispatch();
  const { id } = useParams();
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id == id)
  );
  // const pizzaItems = useSelector(itemsPizza);
  // const { imageUrl, title, price, sizes, description } = pizzaItems.find(
  //   (item) => item.id == id
  // );
  const [type, setType] = React.useState(0);
  const [size, setSize] = React.useState(0);

  const onClickAdd = () => {
    const item = {
      id: data.id,
      title: data.title,
      price: data.price,
      imageUrl: data.imageUrl,
      type: types[type],
      size: data.sizes[size],
    };
    dispatch(addItem(item));
  };

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const item = await axios.get("http://localhost:3001/pizza/" + id);
        setData(item.data);
      } catch (error) {
        alert(error);
      }
    }
    fetchPizza();
  }, []);

  if (data.length === 0) {
    return "Загрузка...";
  }

  return (
    <div className="pizza-wrapper">
      <div className="pizza_block_page">
        <img src={data.imageUrl} alt="" className="pizza_block__image" />
        <h4 className="pizza_block__title">
          {data.title}
          {
            <i
              style={{ background: cartItem ? null : "#fff" }}
              className="count"
            >
              {cartItem ? cartItem.count : 0}
            </i>
          }
        </h4>
        <div className="pizza_block_page__info">
          <div className="pizza_block__selector">
            <ul>
              {types.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setType(index)}
                    className={index == type ? "active" : ""}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
            <ul>
              {data.sizes?.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setSize(index)}
                    className={index === size ? "active" : ""}
                  >
                    {item} см.
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="pizza_block__description">
            <p>{data.description}</p>
          </div>
        </div>
        <div className="pizza_block__bottom">
          <div className="pizza_block__price">от {data.price} ₽</div>
          <div
            onClick={() => onClickAdd()}
            className="button button__outline button_add"
          >
            <img width={12} height={12} src="../img/plusWhite.svg" alt="plus" />
            <span>Добавить</span>
          </div>
          <Link to="/" className="button button__back">
            Вернуться назад
          </Link>
        </div>
      </div>
    </div>
  );
}
