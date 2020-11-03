import React from 'react';
import { connect } from 'react-redux';

import './styles/App.css';
import * as actions from './redux/actions';
import { IInitialState, IAppProps, IMovies } from './interfaces';

import MovieList from './components/MovieList';

const App = (props: IAppProps) => {
  return (
    <div className="app">
      <div className="app__wrapper">
        <MovieList
          movieList={props.movies}
          setMovieList={props.setMovieList}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: IInitialState): {
  movies: IMovies[];
} => state;
const mapDispatchToProps: {
  setMovieList(movies: IMovies[]): void;
} = {
  setMovieList: actions.setMovieList
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
