import {
  GET_KLIPAK_PENDING,
  GET_KLIPAK_SUCCESS,
  GET_KLIPAK_ERROR,
} from '../actions/klipak';

const initialState = {
  broadcasters: {},
  clippers: {},
  loading: false,
  loaded: false,
  error: null,
};

const klipakReducer = (state = initialState, action) => {
  let clippers = {};
  switch (action.type) {
    case GET_KLIPAK_PENDING:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case GET_KLIPAK_SUCCESS:
      action.payload.items.forEach((clip) => {
        if (clippers[clip.creator_name]) {
          clippers[clip.creator_name] = clippers[clip.creator_name] + 1;
        } else {
          clippers[clip.creator_name] = 1;
        }
      });
      return {
        ...state,
        broadcasters: {
          ...state.broadcasters,
          [action.username]: action.payload.items,
        },
        clippers: {
          ...state.clippers,
          ...clippers,
        },
        loading: false,
        loaded: true,
      };
    case GET_KLIPAK_ERROR:
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

export default klipakReducer;
