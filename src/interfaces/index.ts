export interface IInitialState {
  movies: IMovies;
  filters: IFilters;
}

export interface IMovies {
  Search: IMoviesSearchList[];
  totalResults: string;
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
  movies: IMovies;
}

export interface ISetMoviesFiltersAction {
  type: 'SET_FILTERS';
  filterName: string;
  value: number | string;
}

export interface IMoviesSearchList {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IAppProps {
  movies: IMovies;
  filters: IFilters;
  setMovieList(movies: IMovies): void;
  setFilters(filterName: string, value: number | string): void;
}

export interface IMovieList {
  movies: IMovies;
  filters: IFilters;
  isFetching: boolean;
  errorMessages: string;
  searchMovies(newSearch?: boolean): void;
  setFilters(filterName: string, value: number | string): void;
}

export interface ISearchBar {
  filters: IFilters;
  searchMovies(newSearch?: boolean): void;
  setFilters(filterName: string, value: number | string): void;
}
