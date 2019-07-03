import React, { Component } from "react";
import data from "../data/data";
import Card from "./Card";
import Buttons from "./Buttons";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      peopleArr: data,
      person: data[0],
      index: 0
    };
    this.navigateDir = this.navigateDir.bind(this);
  }
  navigateDir(value) {
    if (
      (this.state.index === 0 && value > 0) ||
      (this.state.index > 0 &&
        this.state.index < this.state.peopleArr.length - 1) ||
      (this.state.index === this.state.peopleArr.length - 1 && value < 0)
    ) {
      let newIndex = this.state.index + value;
      this.setState({ person: data[newIndex], index: newIndex });
    }
  }
  render() {
    return (
      <div className="directory">
        <Card peopleArr={this.state.peopleArr} person={this.state.person} />
        <Buttons navigateDir={this.navigateDir} />
      </div>
    );
  }
}

export default Directory;
