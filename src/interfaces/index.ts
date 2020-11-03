export interface IInitialState {
  movies: IMovies[];
  filters: IFilters;
}

export interface IFilters {
  keyword: string;
  page: number;
}

export type ActionTypes =
  ISetMoviesAction |
  ISetMoviesFiltersAction ;

export interface ISetMoviesAction {
  type: 'SET_MOVIES';
  movies: IMovies[];
}

export interface ISetMoviesFiltersAction {
  type: 'SET_FILTERS';
  filterName: string;
  value: number | string;
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
  filters: IFilters;
  setMovieList(movies: IMovies[]): void;
  setFilters(filterName: string, value: number | string): void;
}

export interface IMovieList {
  movieList: IMovies[];
  filters: IFilters;
  setMovieList(movies: IMovies[]): void;
  setFilters(filterName: string, value: number | string): void;
}
