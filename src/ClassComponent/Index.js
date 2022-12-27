import React, { Component } from "react";

class MyState extends Component {
  constructor() {
    super();
    this.state = {
      info: "MSdhoni"
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.info}</p>
            <button
                onClick={() => this.setState({ info: "yuvi" })}
            >
                Upadte
            </button>
      </div>
    );
  }
}
export default MyState;
