import React, { Component } from "react";
import data from "../data/data";
import Card from "./Card";
import Buttons from "./Buttons";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      peopleArr: data,
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.delete = this.delete.bind(this);
  }

  increment() {
    let newCount;
    if (this.state.count === this.state.peopleArr.length - 1) {
      newCount = 0;
    } else {
      newCount = this.state.count + 1;
    }
    this.setState({ count: newCount });
  }

  decrement() {
    let newCount;
    if (this.state.count === 0) {
      newCount = this.state.peopleArr.length - 1;
    } else {
      newCount = this.state.count - 1;
    }
    this.setState({
      count: newCount
    });
  }

  delete() {
    let newPeopleArr = this.state.peopleArr;
    newPeopleArr.splice(this.state.count, 1);
    for (let i = this.state.count; i < newPeopleArr.length; i++) {
      newPeopleArr[i].id -= 1;
    }
    this.setState({ peopleArr: newPeopleArr });
  }

  render() {
    const viewPeople = this.state.peopleArr.map(person => {
      return (
        <Card
          peopleArr={this.state.peopleArr}
          id={person.id}
          name={person.name}
          city={person.city}
          country={person.country}
          employer={person.employer}
          title={person.title}
          favoriteMovies={person.favoriteMovies}
        />
      );
    });
    return (
      <div className="directory">
        {viewPeople[this.state.count]}
        <Buttons
          increment={this.increment}
          decrement={this.decrement}
          delete={this.delete}
        />
      </div>
    );
  }
}

export default Directory;
