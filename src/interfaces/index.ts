export interface IInitialState {
  movies: object[]
}

export type ActionTypes =
  IUpdateMoviesAction ;

export interface IUpdateMoviesAction {
  type: 'UPDATE_MOVIES';
  movies: object[];
}