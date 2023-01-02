import { Button } from "antd";
import React from "react";
import Node2c from "./Node2c";

const Node1c = ({ laptopName, setLaptopname }) => {
  console.log();
  return (
    <div>
      <p>Node1c</p>
      <p>{laptopName.personal}</p>
      <Button
        onClick={() =>
          setLaptopname({
            ...laptopName,
            personal: "Apple"
          })
        }
      >
        Node1 UPDATE
      </Button>
      <Node2c />
    </div>
  );
};
export default Node1c;
