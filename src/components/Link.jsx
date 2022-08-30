import React from "react";

function Link(props) {
  const arg = props.arguments;
  return <div>{arg.content}</div>;
}

export default Link;
