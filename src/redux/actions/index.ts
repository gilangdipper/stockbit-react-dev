import { IUpdateMoviesAction } from '../../interfaces';

export const UPDATE_MOVIES = 'UPDATE_MOVIES';

export const updateMovies = (movies: object[]): IUpdateMoviesAction => {
  return {
    type: UPDATE_MOVIES,
    movies
  }
};

export const fetchMovie = () => {

};