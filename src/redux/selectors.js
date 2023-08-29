import { createSelector } from "reselect";
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filter?.search;
export const filterStatusSelector = (state) => state.filter?.priority;
export const prioritiesSelector = (state) => state.filter?.priorities;
export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  prioritiesSelector,
  (todoList, searchText, status, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
    });
  }
);
