import React from "react";
import Node2c from "./Node2c";

const Node1c = (props) => {
  console.log(props);
  return (
    <div>
      <p>Node1c</p>
      <p>{props.laptopName.personal}</p>
      <Node2c />
    </div>
  );
};
export default Node1c;
