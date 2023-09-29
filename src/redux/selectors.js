import { createSelector } from "reselect";
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters?.search;
export const filterStatusSelector = (state) => state.filters?.status;
export const prioritiesSelector = (state) => state.filters?.priorities;
export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  prioritiesSelector,
  (todoList, searchText, status, priorities) => {
    console.log("todoList", todoList);
    return todoList.filter((todo) => {
      console.log("todo", searchText);
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText) && todo;
      } else {
        return (
          todo.name.includes(searchText) &&
          (status === "Completed" ? todo.completed : !todo.completed) &&
          (priorities.length ? priorities.includes(todo.priority) : true)
        );
      }
    });
  }
);
