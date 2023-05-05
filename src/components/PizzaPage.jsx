// import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { Context } from "../Context";
// import { Link } from "react-router-dom";

// export const PizzaPage = () =>{
//     const {pizzaItems} = useContext(Context);
//     const {id} = useParams();
//     const {imageUrl,title, price } = pizzaItems.find(item => item.id == id);
//     return(<div>
//         <img src={imageUrl} alt="" className="pizza_block__image" />
//         <h4 className="pizza_block__title">{title}</h4>
//         <div className="pizza_block__bottom">
//           <div className="pizza_block__price">от {price} ₽</div>
//           <Link to="/" className='button button-outline button--add go-back-btn'>
//                 <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//                 </svg>
//                 <b>Вернуться назад</b>
//                 </Link>
//           <div 
//         //   onClick={() => onClickAdd()}
//            className="button button__outline button_add">
//             <img width={12} height={12} src="./img/plusWhite.svg" alt="plus" />
//             <span>Добавить</span>
//             {/* {cartItem && <i className="count">{cartItem.count}</i>} */}
//           </div>
//         </div>
//     </div>)
//     ;
// }
import React, {useContext} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { Context } from "../Context";
import { Link } from 'react-router-dom';


import { addItem } from '../redux/slices/cartSlice';

const types = ['Тонкое', 'Традиционное'];

export function PizzaPage() {
  const dispatch = useDispatch();
  const {id} = useParams();
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id == id));
  const {pizzaItems} = useContext(Context);
  const {imageUrl,title, price, sizes, description } = pizzaItems.find(item => item.id == id);
  const [type, setType] = React.useState(0);
  const [size, setSize] = React.useState(0);

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: types[type],
      size: sizes[size],
    };
    dispatch(addItem(item));
  };

  return (
    <div className="pizza-wrapper">
      <div className="pizza_block_page">
        <img src={imageUrl} alt="" className="pizza_block__image" />
        <h4 className="pizza_block__title">{title}{<i style={{display: cartItem ? null: "none"}} className="count">{cartItem ? cartItem.count : 0}</i>}</h4>
        <div className='pizza_block_page__info'>
          <div className="pizza_block__selector">
            <ul>
              {types.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setType(index)}
                    className={index == type ? 'active' : ''}>
                    {item}
                  </li>
                );
              })}
            </ul>
            <ul>
              {sizes.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setSize(index)}
                    className={index === size ? 'active' : ''}>
                    {item} см.
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='pizza_block__description'>
              <p>{description}</p>
          </div>
          </div>
        <div className="pizza_block__bottom">
          <div className="pizza_block__price">от {price} ₽</div>
          <div onClick={() => onClickAdd()} className="button button__outline button_add">
            <img width={12} height={12} src="../img/plusWhite.svg" alt="plus" />
            <span>Добавить</span>
            {/* {cartItem && <i className="count">{cartItem.count}</i>} */}
          </div>
          <Link to="/" className="button button__back">
              Вернуться назад
            </Link>
        </div>
      </div>
    </div>
  );
}
