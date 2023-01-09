// import FCindex from './FunctionalComponent/Index'
// import LearnReact from "./FunctionalComponent/Concepts/LearnState";
// import MyState from "./ClassComponent/Index";
// import Contact from "./FunctionalComponent/Concepts/Contact";
// import PropsParent from "./FunctionalComponent/Concepts/PropsParent";
// import PropsParentNodeP from "./FunctionalComponent/Concepts/Props/Index";
// import ContextAPI from "./FunctionalComponent/Concepts/ContextAPI";
import { Card } from "antd";
import MultiComponent from "./FunctionalComponent/Concepts/MultiComponent/Index";
const Home = () => {
  return (
    <div style={{ backgroundColor: "Black", color: "white" }}>
      <h1 style={{ textAlign: "center" }}>PARENT COMPONENT</h1>
      {/* <Card><FCindex/></Card> */}
      {/* <LearnReact /> */}
      {/* <MyState /> */}
      {/* <Contact /> */}
      {/* <PropsParent/> */}
      <Card style={{ backgroundColor: "#aaaaaa" }}>
        <div style={{ textAlign: "center", color: "white" }}>
          {/* <PropsParentNodeP /> */}
          {/* <ContextAPI /> */}
          <MultiComponent />
        </div>
      </Card>
    </div>
  );
};
export default Home;
