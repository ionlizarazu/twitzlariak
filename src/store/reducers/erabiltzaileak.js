import {
  GET_ERABILTZAILEAK_PENDING,
  GET_ERABILTZAILEAK_SUCCESS,
  GET_ERABILTZAILEAK_ERROR,
} from '../actions/erabiltzaileak';

const initialState = {
  items: [],
  loading: false,
  loaded: false,
  error: null,
};

const erabiltzaileakReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERABILTZAILEAK_PENDING:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case GET_ERABILTZAILEAK_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        loading: false,
        loaded: true,
      };
    case GET_ERABILTZAILEAK_ERROR:
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

export default erabiltzaileakReducer;
