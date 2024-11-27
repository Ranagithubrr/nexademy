import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoInferface {
  text: string;
  description?: string;
  completed: boolean;
  dueDate: string;
  priority: "low" | "medium" | "high";
}

const initialState: TodoInferface[] = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoInferface>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
