import React from 'react';
import { connect } from 'react-redux';

import './styles/App.css';
import * as actions from './redux/actions';
import { IInitialState, IAppProps, IMovies, IFilters } from './interfaces';

import MovieList from './components/MovieList';

const App = (props: IAppProps) => {
  return (
    <div className="app">
      <div className="app__wrapper">
        <MovieList
          movieList={props.movies}
          filters={props.filters}
          setMovieList={props.setMovieList}
          setFilters={props.setFilters}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: IInitialState): {
  movies: IMovies[];
  filters: IFilters;
} => state;
const mapDispatchToProps: {
  setMovieList(movies: IMovies[]): void;
  setFilters(filterName: string, value: number | string): void;
} = {
  setMovieList: actions.setMovieList,
  setFilters: actions.setFilters
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
