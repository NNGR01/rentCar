import { createSlice } from '@reduxjs/toolkit';

const viewSlice = createSlice({
  name: 'view',
  initialState: 'form', 
  reducers: {
    setView: (state, action) => action.payload,
  },
});

export const { setView } = viewSlice.actions;
export default viewSlice.reducer;
