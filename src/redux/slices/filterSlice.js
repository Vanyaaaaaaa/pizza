import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  indexCategories: 0,
  indexSort: 0,
  ascDesc: true,
  searchValue: "",
};

export const filtrSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setIndexCategories: (state, index) => {
      state.indexCategories = index.payload;
    },
    setIndexSort: (state, index) => {
      state.indexSort = index.payload;
    },
    setAscDesc: (state) => {
      state.ascDesc = !state.ascDesc;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const filterState = (state) => state.filter;

export const { setIndexCategories, setIndexSort, setAscDesc, setSearchValue } =
  filtrSlice.actions;

export default filtrSlice.reducer;
