import React, { Component } from "react";
import Bio from "./Bio";
import Movies from "./Movies";

class Card extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="card">
        <h1 className="name">
          {this.props.person.id}/{this.props.peopleArr.length}
        </h1>
        <div className="cardInfo">
          <Bio
            name={this.props.person.name}
            city={this.props.person.city}
            country={this.props.person.country}
            employer={this.props.person.employer}
            title={this.props.person.title}
          />
          <Movies favMoviesArr={this.props.person.favoriteMovies} />
        </div>
      </div>
    );
  }
}

export default Card;
