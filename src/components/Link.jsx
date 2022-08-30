import React from "react";

function Link(props) {
  const args = props.arguments;
  const url = args.find((x) => x.type === "url").content;

  return <div>{url}</div>;
}

export default Link;
