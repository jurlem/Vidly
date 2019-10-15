import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies (),
  };

  handleDelete = movie => {
    let movies = this.state.movies.filter (m => m._id !== movie._id);
    this.setState ({movies});
    console.log (this.state.movies);
  };

  render () {
    const {length: count} = this.state.movies;
    console.log (count);
    if (count === 0) return <p>There are no movies in the list</p>;
    return (
      <React.Fragment>
        <p>There are {count} numbers of movies in the list</p>;
        <main className="container">
          {this.renderTable ()}
        </main>
      </React.Fragment>
    );
  }

  renderTable () {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map (movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => this.handleDelete (movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr />
        </tbody>
      </table>
    );
  }
}
export default Movies;
