import {
  ISetMoviesAction,
  ISetMoviesFiltersAction,
  IMovies
} from '../../interfaces';

export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTERS = 'SET_FILTERS';

export const setMovieList = (movies: IMovies[]): ISetMoviesAction => {
  return {
    type: SET_MOVIES,
    movies
  }
};
export const setFilters = (filterName: string, value: number | string): ISetMoviesFiltersAction => {
  return {
    type: SET_FILTERS,
    filterName,
    value
  }
};