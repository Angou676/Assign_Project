import { configureStore, createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "heading",
  initialState: {
    selectHeading: {
      items: "",
    },
  },
  reducers: {
    setSelectHeading(state, action) {
      state.selectHeading = action.payload;
    },
  },
});
export const actions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});
export default store;
