import { message } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import LearnProps from "./LearnProps";
const PropsParent = () => {
  const [APIdata, setAPIdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        console.log("API res", res);
        // const { success, data } = res.data;
        console.log("-----------", res.data);
        setAPIdata(res.data);
      })
      .catch();
  }, []);

  return (
    <div>
      <p>This is props Parennnt file</p>
      {/* <p>{APIdata.users}</p> */}
      {JSON.stringify(APIdata.users)}
      <LearnProps />
    </div>
  );
};
export default PropsParent;
