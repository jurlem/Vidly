import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import Like from './Like';

class Movies extends Component {
  state = {
    movies: getMovies (),
  };

  handleDelete = movie => {
    let movies = this.state.movies.filter (m => m._id !== movie._id);
    this.setState ({movies});
  };

  handleLike = movie => {
    // changing the state but not directly
    const movies = [...this.state.movies];
    const index = movies.indexOf (movie);
    movies[index] = {...movies[index]};
    // toggle:
    movies[index].liked = !movies[index].liked;
    this.setState ({movies});
  };

  render () {
    const {length: count} = this.state.movies;
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
                <Like
                  onLike={() => this.handleLike (movie)}
                  liked={movie.liked}
                />
              </td>
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
