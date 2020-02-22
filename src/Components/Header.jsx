import React from "react";
import Wrapper from "./Wrapper";
const Header = props => {
  return (
    <Wrapper>
      <h2 className="txt-center">You have ({props.numTodos}) pending tasks</h2>
    </Wrapper>
  );
};
export default Header;
