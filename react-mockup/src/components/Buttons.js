import React, { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        <button className="nav-btn" onClick={() => this.props.decrement()}>
          {`< Previous`}
        </button>
        <div className="inner-btn">
          <button
            className="modify-btn"
            onClick={() => this.props.editShowForm()}
          >
            Edit
          </button>
          <button className="modify-btn" onClick={() => this.props.delete()}>
            Delete
          </button>
          <button className="modify-btn">New</button>
        </div>
        <button className="nav-btn" onClick={() => this.props.increment()}>
          {`Next >`}
        </button>
      </div>
    );
  }
}

export default Buttons;
