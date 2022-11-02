import {
  GET_ZUZENEKOAK_PENDING,
  GET_ZUZENEKOAK_SUCCESS,
  GET_ZUZENEKOAK_ERROR,
} from '../actions/zuzenekoak';

const initialState = {
  items: [],
  loading: false,
  loaded: false,
  error: null,
};

const zuzenekoakReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ZUZENEKOAK_PENDING:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case GET_ZUZENEKOAK_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        loading: false,
        loaded: true,
      };
    case GET_ZUZENEKOAK_ERROR:
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

export default zuzenekoakReducer;
