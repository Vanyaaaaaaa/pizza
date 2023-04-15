import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  indexCategories: 0,
  indexSort: 0
};

export const filtrSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setIndexCategories: (state, index) => {
      state.indexCategories = index.payload;
    },
    setIndexSort: (state, index) =>{
      state.indexSort = index.payload;
    },
    // setFilters(state, action){
    //   state.indexCategories = Number(action.payload.indexCategories);
    //   state.indexSort = action.payload.indexSort;
    // }
  },
});

export const { setIndexCategories, setIndexSort, setFilters } = filtrSlice.actions;

export default filtrSlice.reducer;
