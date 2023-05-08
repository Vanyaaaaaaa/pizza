import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import cardReducer from './slices/cardSlice';
import cartReducer from './slices/cartSlice';
import pizzaReducer from './slices/pizzaSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    card: cardReducer,
    cart: cartReducer, 
    pizza: pizzaReducer
  },
});