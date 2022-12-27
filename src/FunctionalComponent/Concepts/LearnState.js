import React, { useState } from "react";

const LearnReact = () => {
  const [info, setInfo] = useState("Ankit");

  const updateINfo = () => {
    setInfo("chaudhary");
  };
  return (
    <div>
      <h1>{info}</h1>
      {/* <button onClick={()=>setInfo('Chauhary')}>UPDATE INFO</button> */}
      <button onClick={updateINfo}>Upate</button>
    </div>
  );
};
export default LearnReact;
