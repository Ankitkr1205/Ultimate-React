import { Button, Card, Collapse } from "antd";
import React, { useState } from "react";

const MultiComponent = () => {
  const [addMore, setAddMore] = useState([]);
  const IPL = ["aaa", "bbb", "cccc"];
  const [details, setDetails] = useState([
    {
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
              earpods: "pTron",
              Speakers: [
                "JBL",
                "SONY",
                "MI",
                {
                  lenovo: {
                    phone: "samsung",
                    headphone: "Bose",
                    earphones: "Noise",
                    earpods: "pTron"
                  }
                }
              ]
            }
          },
          "Japan",
          "Pakistan"
        ]
      }
    }
  ]);
  const { Panel } = Collapse;

  const onChange = (key) => {
    console.log(key);
  };

  const Primary = () => {
    return (
      <div style={{ marginBottom: "20", marginTop: "20" }}>
        <Collapse defaultActiveKey={["1"]} onChange={onChange}>
          <Panel>
            <Card>
              <h2>This is primary</h2>
            </Card>
          </Panel>
        </Collapse>
      </div>
    );
  };

  const shows = details.map((show) => {
    console.log("show", show);
    console.log("show.gaming", show.gaming);

      return (<>
          {show.gaming.others?.customers.map((a) => {
              console.log('------------',a[2]);
          return(a[2])
      })}
      </>);
  });
  return (
    <>
      <h1>Rendring Multi Component</h1>
      <h1>{shows}</h1>
      <Button
        onClick={() => {
          setAddMore(addMore.concat(<Primary />));
        }}
      >
        Add more
      </Button>
      <Primary />
      {/* <h1>{addMore.filter((data) => {})}</h1> */}
      <div style={{ marginBottom: "20", marginTop: "20" }}>{addMore}</div>
    </>
  );
};
export default MultiComponent;
