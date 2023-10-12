import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      categoryId: 1,
      name: 'Highlight',
    },
    {
      categoryId: 2,
      name: 'Environment',
    },
    {
      categoryId: 3,
      name: 'Education',
    },
    {
      categoryId: 4,
      name: 'Clothing ',
    },
    {
      categoryId: 5,
      name: 'Household ',
    },
    {
      categoryId: 6,
      name: 'Electronics',
    },
    {
      categoryId: 7,
      name: 'Hobbies ',
    },
    {
      categoryId: 8,
      name: ' Equipments',
    },
    {
      categoryId: 9,
      name: 'Books ',
    },
    {
      categoryId: 10,
      name: 'Health ',
    },
    {
      categoryId: 11,
      name: 'supplies',
    },
    {
      categoryId: 12,
      name: 'Tools ',
    },
    {
      categoryId: 13,
      name: 'Art ',
    },
  ],
  selectedCategoryId: 1,
};

const Categories = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    resetCategories: () => {
      return initialState;
    },
    updateSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const {resetCategories, updateSelectedCategoryId} = Categories.actions;

export default Categories.reducer;
