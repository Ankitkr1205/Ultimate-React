// import FCindex from './FunctionalComponent/Index'
// import LearnReact from "./FunctionalComponent/Concepts/LearnState";
// import MyState from "./ClassComponent/Index";
// import Contact from "./FunctionalComponent/Concepts/Contact";
// import PropsParent from "./FunctionalComponent/Concepts/PropsParent";
// import LearnContext from "./FunctionalComponent/Concepts/Advance/LearnContext";
import PropsParentNodeP from "./FunctionalComponent/Concepts/Props/Index";
import { Card } from "antd";
const Home = () => {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <Card>
        <h1 style={{ textAlign: "center" }}>PARENT COMPONENT</h1>
        {/* <Card><FCindex/></Card> */}
        {/* <LearnReact /> */}
        {/* <MyState /> */}
        {/* <Contact /> */}
        {/* <PropsParent/> */}
        {/* <LearnContext /> */}
        <Card style={{ backgroundColor: "#aaaaaa" }}>
          <div style={{ textAlign: "center", color: "white" }}>
            <PropsParentNodeP />
          </div>
        </Card>
      </Card>
    </div>
  );
};
export default Home;
