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
        <button className="nav-btn" onClick={() => this.props.navigateDir(1)}>
          {`Next >`}
        </button>
      </div>
    );
  }
}

export default Buttons;
