import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "todoList",
  initialState: [
    { id: "1", name: "learn Code ", completed: false, priority: "Medium" },
    { id: "2", name: "learn English ", completed: true, priority: "High" },
    { id: "3", name: "learn Music ", completed: false, priority: "Low" },
    { id: "4", name: "learn Love and Healing ", completed: true, priority: "Medium" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      let currentTodo = state.filter((todo) => {
        return todo.id === action.payload;
      });
      currentTodo[0].completed = !currentTodo[0].completed;
    },
  },
});
