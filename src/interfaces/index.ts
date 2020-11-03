export interface IInitialState {
  movies: IMovies[];
}

export type ActionTypes =
  IUpdateMoviesAction ;

export interface IUpdateMoviesAction {
  type: 'UPDATE_MOVIES';
  movies: IMovies[];
}

export interface IMovies {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IAppProps {
  movies: IMovies[];
  setMovieList(movies: IMovies[]): void;
}

export interface IMovieList {
  movieList: IMovies[];
  setMovieList(movies: IMovies[]): void;
}
