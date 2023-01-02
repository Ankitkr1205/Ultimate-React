import React, { useEffect, useState } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const AgGridTable = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("API respose", res);
        const { success, data } = res.data;
        setUsers(data);
        console.log("User", users);
      })
      .catch((err) => {
        // Handle error
        console.log(err);
      });
  }, []);

  const colVlaue = [
    { headerName: "Name", field: "body" },
    { headerName: "Age", field: "body" },
    { headerName: "Role", field: "body" },
    { headerName: "Status", field: "body" }
  ];

  return (
    <div>
      I am AgGridTable
      <div className='ag-theme-alpine' style={{ height: 400, width: 600 }}>
        <AgGridReact columnDefs={colVlaue} datasource={users} />
      </div>
    </div>
  );
};

export default AgGridTable;
