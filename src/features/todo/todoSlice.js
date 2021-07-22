import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      { id: 1, text: "Finalize presentation", isDone: false },
      { id: 2, text: "Get groceries for dinner", isDone: false },
      { id: 3, text: "Book a flight", isDone: false },
    ],
    doneItems: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: new Date().getTime(),
        text: action.payload,
        isDone: false,
      });
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoDone: (state, action) => {
      state.items = state.items
        .map((item) =>
          item.id === action.payload ? { ...item, isDone: !item.isDone } : item
        )
        .filter(Boolean);
    },
  },
});

export const selectTodos = (state) => {
  return state.todo.items;
};

export const { addTodo, removeTodo, toggleTodoDone } = todoSlice.actions;
export default todoSlice.reducer;
