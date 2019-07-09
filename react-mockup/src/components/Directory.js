import React, { Component } from "react";
import data from "../data/data";
import Card from "./Card";
import Buttons from "./Buttons";
import Form from "./Form";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      peopleArr: data,
      count: 0,
      displayStyle: "none",
      editStatus: false,
      newPersonStatus: false
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.delete = this.delete.bind(this);
    this.editShowForm = this.editShowForm.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.handleEmployer = this.handleEmployer.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleFavoriteMovie = this.handleFavoriteMovie.bind(this);
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

  editShowForm() {
    if (this.state.displayStyle === "none") {
      this.setState({ displayStyle: null, editStatus: true });
    } else if (this.state.editStatus === true) {
      this.setState({ displayStyle: "none", editStatus: false });
    }
  }

  handleFirstName(value) {
    let modArr = this.state.peopleArr;
    modArr[this.state.count].name.first = value;
    this.setState({ personArr: modArr });
  }

  handleLastName(value) {
    let modArr = this.state.peopleArr;
    modArr[this.state.count].name.last = value;
    this.setState({ personArr: modArr });
  }

  handleCity(value) {
    let modArr = this.state.peopleArr;
    modArr[this.state.count].city = value;
    this.setState({ personArr: modArr });
  }

  handleCountry(value) {
    let modArr = this.state.peopleArr;
    modArr[this.state.count].country = value;
    this.setState({ personArr: modArr });
  }

  handleEmployer(value) {
    let modArr = this.state.peopleArr;
    modArr[this.state.count].employer = value;
    this.setState({ personArr: modArr });
  }

  handleTitle(value) {
    let modArr = this.state.peopleArr;
    modArr[this.state.count].title = value;
    this.setState({ personArr: modArr });
  }

  handleFavoriteMovie(value, index) {
    let modArr = this.state.peopleArr;
    modArr[this.state.count].favoriteMovies[index] = value;
    this.setState({ personArr: modArr });
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
          editShowForm={this.editShowForm}
        />
        <Form
          displayStyle={this.state.displayStyle}
          person={this.state.peopleArr[this.state.count]}
          handleFirstName={this.handleFirstName}
          handleLastName={this.handleLastName}
          handleCity={this.handleCity}
          handleCountry={this.handleCountry}
          handleEmployer={this.handleEmployer}
          handleTitle={this.handleTitle}
          handleFavoriteMovie={this.handleFavoriteMovie}
        />
      </div>
    );
  }
}

export default Directory;
