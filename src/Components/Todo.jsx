import React from "react";
import Wrapper from "./Wrapper";
const Todo = props => {
  return (
    <Wrapper>
      <span
        style={{
          textDecoration: props.content.completed ? "line-through" : ""
        }}
      >
        {props.content.title}
      </span>
      <div>
        <button
          className="primary-btn-sm margin-right-12"
          onClick={() => props.completedTasks(props.id)}
        >
          Completed
        </button>
        <button className="btn-danger" onClick={() => props.onDelete(props.id)}>
          X
        </button>
      </div>
    </Wrapper>
  );
};
export default Todo;
