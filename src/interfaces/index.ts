export interface IInitialState {
  movies: IMovies;
  filters: IFilters;
  details: IDetails;
}

export interface IDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: {
    Source: string,
    Value: string
  }[],
  Metascore: string,
  imdbRating: string,
  imdbVotes: string,
  imdbID: string,
  Type: string,
  DVD: string,
  BoxOffice: string,
  Production: string,
  Website: string,
  Response: string
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
  ISetMoviesFiltersAction |
  ISetDetailsAction ;

export interface ISetMoviesAction {
  type: 'SET_MOVIES';
  movies: IMovies;
}

export interface ISetMoviesFiltersAction {
  type: 'SET_FILTERS';
  filterName: string;
  value: number | string;
}

export interface ISetDetailsAction {
  type: 'SET_DETAILS';
  details: IDetails;
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

export interface IDetailsPage {
  details: IDetails;
  setDetails(details: IDetails): void;
}