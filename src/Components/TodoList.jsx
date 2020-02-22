import React from "react";
import Todo from "./Todo";
import Wrapper from "./Wrapper";
const TodoList = props => {
  const todos = props.items.map((todo, index) => {
    return (
      <li key={index}>
        <Todo
          content={todo}
          key={index}
          id={index}
          onDelete={props.onDelete}
          completedTasks={props.completedTask}
        />
      </li>
    );
  });
  return (
    <Wrapper>
      {todos.length > 0 && (
        <article className="todo-list">
          <ul>{todos}</ul>
        </article>
      )}
    </Wrapper>
  );
};
export default TodoList;
