import { Button } from "antd";
import React, { useState } from "react";
import Node1c from "./Node1c";

const PropsParentNodeP = () => {
  const [laptopName, setLaptopname] = useState({
    gaming: "msi",
    normal: "lenovo",
    personal: "HP",
    professional: "macBook"
  });
  return (
    <div>
      <h1>PropsParentNodeP</h1>
      <p>{laptopName.normal}</p>
      <Button>UPDATE</Button>
      <Node1c laptopName={laptopName} />
    </div>
  );
};
export default PropsParentNodeP;
