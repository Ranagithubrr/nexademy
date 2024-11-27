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
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
