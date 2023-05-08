import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import axios from "axios";

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params, thunkAPI) => {
    const { categ,sort,sortAscDesc, countPage} = params;
    const {data} = await axios.get(
        `http://localhost:3001/pizza?_page=${countPage}&_limit=8&${categ}&_sort=${sort}&_order=${sortAscDesc}`,
    )
    return data;
})

const initialState = {
    items: [],
    status: 'loading'
};

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers:{
        setItems(state, action){
            state.items = action.payload;
        }
    },
    extraReducers:{
        [fetchPizzas.pending]: (state) =>{
            state.status = 'loading';
            state.items = [];
        },
        [fetchPizzas.fulfilled]: (state, action) =>{
            state.items = action.payload;
            state.status = 'success';
        }, 
        [fetchPizzas.rejected]: (state) =>{
            state.status = 'error';
            state.items = [];
        }
    }
})

export const itemsPizza = (state) => state.pizza.items; 
export const statusItemsPizza = (state) => state.pizza.status; 

export const {setItems} = pizzaSlice.actions;

export default pizzaSlice.reducer;