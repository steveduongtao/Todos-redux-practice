const initState = [
  { id: 1, name: "learn yoga", completed: false, priority: "Medium" },
  { id: 2, name: "learn redux", completed: true, priority: "High" },
  { id: 3, name: "lern javascript", completed: false, priority: "Low" },
  { id: 4, name: "lern sing", completed: true, priority: "Medium" },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};
export default todoListReducer;
