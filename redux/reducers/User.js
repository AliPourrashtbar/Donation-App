import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: 'Ali',
  lastName: 'Pourrashtbar',
  userId: 1,
  profileImage: 'https://cdn-icons-png.flaticon.com/512/21/21104.png',
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    updateLastName: (state, action) => {
      state.lastName = action.payload.lastName;
    },
    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const {updateFirstName, updateLastName, resetToInitialState} =
  User.actions;
export default User.reducer;
