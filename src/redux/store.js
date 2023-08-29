import { configureStore } from "@reduxjs/toolkit";
import FiltersSlice from "../components/Filters/FiltersSlice";
import TodoSlice from "../components/TodoList/TodoSlice";
const store = configureStore({
  reducer: {
    filters: FiltersSlice.reducer,
    todoList: TodoSlice.reducer,
  },
});
export default store;
