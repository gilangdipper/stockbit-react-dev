import { UPDATE_MOVIES } from '../actions';
import { ActionTypes, IInitialState } from '../../interfaces'

const initialState: IInitialState = {
  movies: []
};

function reducer(state = initialState, action: ActionTypes) {
  switch(action.type) {
    case UPDATE_MOVIES:
      return {
        ...state,
        movies: action.movies
      };
    default:
      return state;
  }
}
export default reducer;