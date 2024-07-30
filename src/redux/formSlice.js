import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    data: [],
  },
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    removeData: (state, action) => {
      state.data = state.data.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addData, removeData } = formSlice.actions;
export default formSlice.reducer;
