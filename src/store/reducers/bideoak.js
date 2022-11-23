import {
  GET_BIDEOAK_PENDING,
  GET_BIDEOAK_SUCCESS,
  GET_BIDEOAK_ERROR,
} from '../actions/bideoak';

const initialState = {
  broadcasters: {},
  loading: false,
  loaded: false,
  error: null,
};

const bideoakReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BIDEOAK_PENDING:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case GET_BIDEOAK_SUCCESS:
      return {
        ...state,
        broadcasters: {
          ...state.broadcasters,
          [action.username]: action.payload.items,
        },
        loading: false,
        loaded: true,
      };
    case GET_BIDEOAK_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        loaded: false,
      };
    // Default case
    default:
      return state;
  }
};

export default bideoakReducer;
