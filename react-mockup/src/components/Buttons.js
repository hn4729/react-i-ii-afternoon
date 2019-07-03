import React, { Component } from "react";

class Buttons extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="buttons">
        <button className="nav-btn" onClick={() => this.props.navigateDir(-1)}>
          {`< Previous`}
        </button>
        <div className="inner-btn">
          <button className="modify-btn">Edit</button>
          <button className="modify-btn">Delete</button>
          <button className="modify-btn">New</button>
        </div>
        <button className="nav-btn" onClick={() => this.props.navigateDir(1)}>
          {`Next >`}
        </button>
      </div>
    );
  }
}

export default Buttons;
