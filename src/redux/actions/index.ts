import { IUpdateMoviesAction, IMovies } from '../../interfaces';

export const UPDATE_MOVIES = 'UPDATE_MOVIES';

export const setMovieList = (movies: IMovies[]): IUpdateMoviesAction => {
  return {
    type: UPDATE_MOVIES,
    movies
  }
};
