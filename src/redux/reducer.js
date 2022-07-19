import { combineReducers } from "redux";
import fitersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodoSlice";

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: fitersReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };
const rootReducer = combineReducers({
  filters: fitersReducer,
  todoList: todoListReducer,
});

export default rootReducer;
// const initState = {
//   filters: {
//     search: "",
//     status: "All", //gía trị ban đầu select all.
//     priority: [],
//   },
//   todoList: [
//     { id: 1, name: "learn yoga", completed: false, priority: "Medium" },
//     { id: 2, name: "learn redux", completed: true, priority: "High" },
//     { id: 3, name: "lern javascript", completed: false, priority: "Low" },
//     { id: 4, name: "lern sing", completed: true, priority: "Medium" },
//   ],
// };

// const rootReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return {
//         ...state,

//         todoList: [...state.todoList, action.payload],
//       };
//     case "filters/serchFilterChange":
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           search: action.pay,
//         },
//       };

//     default:
//       return state;
//   }
// };
// export default rootReducer;
