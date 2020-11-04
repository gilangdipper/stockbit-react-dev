import { SET_MOVIES, SET_FILTERS, SET_DETAILS } from '../actions';
import { ActionTypes, IInitialState } from '../../interfaces'

const initialState: IInitialState = {
  movies: {
    Search: [],
    totalResults: "0",
  },
  filters: {
    keyword: 'Batman',
    page: 1,
  },
  details: {
    Title: '',
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    Poster: "",
    Ratings: [],
    Metascore: "",
    imdbRating: "",
    imdbVotes: "",
    imdbID: "",
    Type: "",
    DVD: "",
    BoxOffice: "",
    Production: "",
    Website: "",
    Response: ""
  },
};

function reducer(state = initialState, action: ActionTypes) {
  switch(action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.filterName]: action.value
        }
      }
    case SET_DETAILS:
      return {
        ...state,
        details: action.details,
      };
    default:
      return state;
  }
}
export default reducer;