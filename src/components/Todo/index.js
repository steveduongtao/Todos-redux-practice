import { Checkbox, Row, Col, Tag, TimePicker } from "antd";
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
      <div style={{ display: "flex" }}>
        <TimePicker.RangePicker
          disabled
          style={{ width: "345px", padding: "0 5px", backgroundColor: "white" }}
          status="warning"
          value={time}
        />
        <Tag
          style={{ minWidth: "64px", textAlign: "right" }}
          color={priorityColorMapping[prioriry]}
        >
          {prioriry}
        </Tag>
      </div>
    </Row>
  );
}
