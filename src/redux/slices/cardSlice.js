import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    countPizza: 0,
};

export const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers:{
        incrementCount: (state) => {
            state.countPizza += 1
        },
        decrementumCount: (state) => {
            state.countPizza -= 1
        }
    }
})

export const {incrementCount, decrementumCount} = cardSlice.actions;

export default cardSlice.reducer;