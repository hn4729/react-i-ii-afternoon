import React, { Component } from "react";

class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <h1>
          {this.props.name.first} {this.props.name.last}
        </h1>
        <div className="bioInfo">
          <p>
            <strong>From: </strong>
            {this.props.city}, {this.props.country}
          </p>
          <p>
            <strong>Job Title: </strong>
            {this.props.title}
          </p>
          <p>
            <strong>Employer: </strong>
            {this.props.employer}
          </p>
        </div>
      </div>
    );
  }
}

export default Bio;
