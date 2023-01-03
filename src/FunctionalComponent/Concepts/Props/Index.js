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
    professional: "macBook",
    others: {
      phone: "samsung",
      headphone: "Bose",
      earphones: "Noise",
      earpods: "pTron",
      customers: [
        "India",
        {
          Australia: {
            phone: "samsung",
            headphone: "Bose",
            earphones: "Noise",
            earpods: "pTron"
          }
        },
        "Japan",
        "Pakistan"
      ]
    }
  });
  console.log(laptopName.others.customers[1].Australia.headphone);
  return (
    <div>
      <h1>PropsParentNodeP</h1>
      <p>{laptopName.normal}</p>
      <p>{laptopName.others.customers[1].Australia.headphone}</p>
      <Button onClick={() => setLaptopname({ normal: "Dell" })}>UPDATE</Button>
      <Node1Context.Provider value={laptopName}>
        <Node1c laptopName={laptopName} setLaptopname={setLaptopname} />
      </Node1Context.Provider>
    </div>
  );
};
export default PropsParentNodeP;
