import { createSelector } from "reselect";
export const todoListSelector = (state) => state.todoList;
export const filterStatusSelecter = (state) => state.filters.status;
export const filterPrioritiesSelecter = (state) => state.filters.priorities;
export const searchTextSelector = (state) => state.filters.search;

// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);
//   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(searchText);
//   });
//   return todosRemaining;
// };
export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelecter,
  searchTextSelector,
  filterPrioritiesSelecter,
  (todoList, status, searchText = "", priorities) => {
    return todoList.filter((todo) => {
      console.log({ todoList });
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
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
