import {
  ISetMoviesAction,
  ISetMoviesFiltersAction,
  IMovies,
  IDetails,
  ISetDetailsAction,
} from '../../interfaces';

export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTERS = 'SET_FILTERS';
export const SET_DETAILS = 'SET_DETAILS';

export const setMovieList = (movies: IMovies): ISetMoviesAction => {
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

export const setDetails = (details: IDetails): ISetDetailsAction => {
  return {
    type: SET_DETAILS,
    details
  }
};

