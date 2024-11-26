import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {},
    removetodo(state, action) {},
  },
});

export { todosSlice };
