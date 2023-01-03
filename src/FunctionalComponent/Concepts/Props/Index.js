import { Button } from "antd";
import React, { createContext, useContext, useState } from "react";
import Node1c from "./Node1c";
import Node3c from "./Node3c";

export const Node1Context = createContext();
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
      <Button onClick={() => setLaptopname({ normal: "Dell" })}>UPDATE</Button>
      <Node1Context.Provider value={laptopName}>
        <Node1c laptopName={laptopName} setLaptopname={setLaptopname} />
      </Node1Context.Provider>
    </div>
  );
};
export default PropsParentNodeP;
