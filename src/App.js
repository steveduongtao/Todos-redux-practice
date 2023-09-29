import { Typography, Divider } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

const { Title } = Typography; //viết lại tên của component  cho tường minh hơn thôi, nói chung chỉ là 1 tip

function App() {
  return (
    <div
      style={{
        width: 1000,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}></Title>
      <Filters />
      <Divider style={{ marginTop: 100 }} />
      <TodoList />
    </div>
  );
}

export default App;
