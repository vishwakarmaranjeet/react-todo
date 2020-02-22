import React from "react";
import Wrapper from "./Wrapper";
const Form = props => {
  // from handler function
  const handleSubmit = e => {
    e.preventDefault();
    if (props.inputValue === "") return;
    props.onFormSubmit(props.inputValue);
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          className="input-box"
          type="text"
          placeholder="Enter Tasks..."
          value={props.inputValue}
          onChange={e => props.inputHandler(e.target.value)}
        />
        <button className="primary-btn">ADD ITEM</button>
      </form>
    </Wrapper>
  );
};
export default Form;
