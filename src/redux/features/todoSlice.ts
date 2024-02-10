import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = { todos: [] };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
