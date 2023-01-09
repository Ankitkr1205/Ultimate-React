// 1) Getting User Data from an API
// 2) Working of MAP function

import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ContextAPI = () => {
  const [myData, setMyData] = useState();
  useEffect(() => {
    let myURL = "https://dummyjson.com/products";
    axios
      .get(myURL)
      .then((res) => {
        console.log("response......", res.data);
        console.log("res", res);
        const { data, status } = res;
        console.log("Data", data);
        setMyData(data);
        console.log("MyData", myData);
        if (status == "200") {
          console.log(".....Data.....", data);
          message.success("Component Loaded");
        }
      })
      .catch(() => message.error("Something went wrong !"));
  }, []);
  return (
    <div>
      <h1>My context</h1>
      {/* <p>{myData.product[0].brand }</p> */}
    </div>
  );
};
export default ContextAPI;
