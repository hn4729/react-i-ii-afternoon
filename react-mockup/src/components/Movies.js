import React, { Component } from "react";

class Movies extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="favMovies">
        <h2>Favorite Movies:</h2>
        <ol>
          <li>{this.props.favMoviesArr[0]}</li>
          <li>{this.props.favMoviesArr[1]}</li>
          <li>{this.props.favMoviesArr[2]}</li>
        </ol>
      </div>
    );
  }
}

export default Movies;
