import React from "react";
import { Node1Context } from "./Index";

const Node3c = () => {
  return (
    <div>
      <p>Node3c</p>
      <Node1Context.Consumer>
              {(contextValue) => {
                  console.log(contextValue)
                  return (
                    <h3> {contextValue.gaming}</h3>
          )
        }}
      </Node1Context.Consumer>
    </div>
  );
};
export default Node3c;
