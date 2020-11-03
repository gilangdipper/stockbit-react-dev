import { SET_MOVIES, SET_FILTERS } from '../actions';
import { ActionTypes, IInitialState } from '../../interfaces'

const initialState: IInitialState = {
  movies: [],
  filters: {
    keyword: 'indonesia',
    page: 1,
  },
};

function reducer(state = initialState, action: ActionTypes) {
  switch(action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: [
          ...state.movies,
          ...action.movies
        ]
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.filterName]: action.value
        }
      }
    default:
      return state;
  }
}
export default reducer;