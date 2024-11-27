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
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
