import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div
        className="form-display"
        style={{ display: this.props.displayStyle }}
      >
        <div className="form-container">
          <input
            placeholder="First Name"
            value={this.props.person.name.first}
            onChange={event => this.props.handleFirstName(event.target.value)}
          />
          <input
            placeholder="Last Name"
            value={this.props.person.name.last}
            onChange={event => this.props.handleLastName(event.target.value)}
          />
          <input
            placeholder="City"
            value={this.props.person.city}
            onChange={event => this.props.handleCity(event.target.value)}
          />
          <input
            placeholder="Country"
            value={this.props.person.country}
            onChange={event => this.props.handleCountry(event.target.value)}
          />
          <input
            placeholder="Employer"
            value={this.props.person.employer}
            onChange={event => this.props.handleEmployer(event.target.value)}
          />
          <input
            placeholder="Title"
            value={this.props.person.title}
            onChange={event => this.props.handleTitle(event.target.value)}
          />
          <input
            placeholder="Favorite Movie 1"
            value={this.props.person.favoriteMovies[0]}
            onChange={event =>
              this.props.handleFavoriteMovie(event.target.value, 0)
            }
          />
          <input
            placeholder="Favorite Movie 2"
            value={this.props.person.favoriteMovies[1]}
            onChange={event =>
              this.props.handleFavoriteMovie(event.target.value, 1)
            }
          />
          <input
            placeholder="Favorite Movie 3"
            value={this.props.person.favoriteMovies[2]}
            onChange={event =>
              this.props.handleFavoriteMovie(event.target.value, 2)
            }
          />
        </div>
      </div>
    );
  }
}

export default Form;
