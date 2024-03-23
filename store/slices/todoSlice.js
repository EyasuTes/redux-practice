import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
      state.count += 1;
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload.id);
      state.count -= 1;
    },
  },
});

export const { addItems, removeItems } = todoSlice.actions;
export default todoSlice.reducer;
