import React, { useContext } from "react";
import Node3c from "./Node3c";
import { Node1Context } from "./Index";

const Node2c = () => {
    const a = useContext(Node1Context)
    console.log('---------',a);
  return (
    <div>
          <p>Node2c</p>
          <p>{ a.personal}</p>
      <Node3c />
    </div>
  );
};
export default Node2c;
