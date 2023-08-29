import { Checkbox, Row, Tag } from "antd";
import { useDispatch } from "react-redux";
import TodoSlice from "../TodoList/TodoSlice";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, prioriry, completed, id, time }) {
  const dispatch = useDispatch();
  const toggleCheckbox = () => {
    dispatch(TodoSlice.actions.toggleTodoStatus(id));
  };
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(completed ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={completed} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color="lime">{time}</Tag>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
