import React, { Component } from "react";
import Bio from "./Bio";
import Movies from "./Movies";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h1 className="name">
          {this.props.id}/{this.props.peopleArr.length}
        </h1>
        <div className="cardInfo">
          <Bio
            name={this.props.name}
            city={this.props.city}
            country={this.props.country}
            employer={this.props.employer}
            title={this.props.title}
          />
          <Movies favMoviesArr={this.props.favoriteMovies} />
        </div>
      </div>
    );
  }
}

export default Card;
