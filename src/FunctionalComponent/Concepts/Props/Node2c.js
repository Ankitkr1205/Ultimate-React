import React, { useContext } from "react";
import Node3c from "./Node3c";
import { Node1Context } from "./Index";

const Node2c = () => {
    // const Node2context=useContext()
  return (
    <div>
      <p>Node2c</p>
      <Node3c />
    </div>
  );
};
export default Node2c;
