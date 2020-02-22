import React, { Component } from "react";
import Wrapper from "./Components/Wrapper";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import Form from "./Components/Form";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [
        { title: "Learn JavaScript", completed: false },
        { title: "Learn ReactJs", completed: false },
        { title: "Learn Angular", completed: false }
      ],
      value: "",
      taskRemaining: 0
    };
  }
  // Adding todo item functionality
  handleSubmit = title => {
    this.setState({
      item: [...this.state.item, { title, completed: false }],
      value: ""
    });
  };
  // input change handler function
  inputHandler = data => {
    this.setState({ inputvalue: data });
  };
  // Delete function
  handleDelete = index => {
    const newTask = [...this.state.item];
    newTask.splice(index, 1);
    this.setState({ item: newTask });
  };
  // input change handler function
  inputChangeHandler = data => {
    this.setState({
      value: data
    });
  };
  // complete task function
  completedTask = index => {
    const newTask = [...this.state.item];
    newTask[index].completed = true;
    this.setState({
      item: newTask
    });
  };
  render() {
    // object destrucuring
    const { item, value } = this.state;
    const taskRemaining = item.filter(item => !item.completed).length;
    return (
      <section className="todo-wrapper">
        <div className="love-js">
          I<span className="heart"></span>
          JS.
        </div>
        <section className="toto-inner-wrapper">
          <Wrapper>
            <Header numTodos={taskRemaining} />
            <Form
              onFormSubmit={this.handleSubmit}
              inputHandler={this.inputChangeHandler}
              inputValue={value}
            />
            <TodoList
              items={item}
              onDelete={this.handleDelete}
              completedTask={this.completedTask}
            />
          </Wrapper>
        </section>
      </section>
    );
  }
}
export default App;
