import { Button, Col, Input, Row, Select, Tag, TimePicker } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { v4 as uuidv4 } from "uuid";
import { prioritiesSelector, todosRemainingSelector } from "../../redux/selectors";
import Todo from "../Todo";
import TodoSlice from "./TodoSlice";
import moment from "moment";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPrioritye] = useState("Medium");
  const [taskCompletionTime, setTaskCompletionTime] = useState("");
  const todoList = useSelector(todosRemainingSelector);
  const priorities = useSelector(prioritiesSelector);

  console.log("priority", priorities, taskCompletionTime);
  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    dispatch(
      TodoSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority,
        completed: false,
        taskCompletionTime,
      })
    );
    // reset input TodoName, and select Todos
    setTodoName("");
    setPrioritye("Medium");
    setTaskCompletionTime("");
  };
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriorityChange = (value) => {
    setPrioritye(value);
  };
  const hanldetaskCompletionTimeChange = (time) => {
    setTaskCompletionTime(time);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            name={todo.name}
            key={todo.id}
            id={todo.id}
            prioriry={todo.priority}
            completed={todo.completed}
            time={todo?.taskCompletionTime}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <TimePicker.RangePicker
            style={{ width: "345px" }}
            status="warning"
            value={taskCompletionTime}
            onChange={hanldetaskCompletionTimeChange}
          />
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
