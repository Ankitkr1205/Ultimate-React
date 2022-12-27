import axios from "axios";
import { useEffect, useState } from "react";
import Contact from "./Contact";
const Index = () => {
  const [myData, setMyData] = useState({
    Player_name: "Dhoni",
    age: 40,
    role: "Keeper",
    Country: "India"
  });
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("res", res);
      })
      .catch();
  }, []);
  return (
    <div>
      <p>I am Index of functional component</p>
      <p>{myData.Player_name}</p>
      <Contact myData={myData} />
    </div>
  );
};
export default Index;
