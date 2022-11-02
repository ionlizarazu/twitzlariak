import { GetZuzenekoak as getZuzenekoakAPI } from '../../api';
export const GET_ZUZENEKOAK_PENDING = 'GET_ZUZENEKOAK_PENDING';
export const GET_ZUZENEKOAK_SUCCESS = 'GET_ZUZENEKOAK_SUCCESS';
export const GET_ZUZENEKOAK_ERROR = 'GET_ZUZENEKOAK_ERROR';
export const getZuzenekoak = (users) => {
  return async (dispatch) => {
    dispatch({
      type: GET_ZUZENEKOAK_PENDING,
    });
    const result = await getZuzenekoakAPI(users);
    try {
      dispatch({
        type: GET_ZUZENEKOAK_SUCCESS,
        payload: {
          items: result,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_ZUZENEKOAK_ERROR,
        payload: error,
      });
      // console.error(error);
    }
  };
};
