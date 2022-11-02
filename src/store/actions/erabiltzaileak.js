import { GetErabiltzaileak as getErabiltzaileakAPI } from '../../api';
export const GET_ERABILTZAILEAK_PENDING = 'GET_ERABILTZAILEAK_PENDING';
export const GET_ERABILTZAILEAK_SUCCESS = 'GET_ERABILTZAILEAK_SUCCESS';
export const GET_ERABILTZAILEAK_ERROR = 'GET_ERABILTZAILEAK_ERROR';
export const getErabiltzaileak = (users) => {
  return async (dispatch) => {
    dispatch({
      type: GET_ERABILTZAILEAK_PENDING,
    });
    const result = await getErabiltzaileakAPI(users);
    try {
      dispatch({
        type: GET_ERABILTZAILEAK_SUCCESS,
        payload: {
          items: result,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_ERABILTZAILEAK_ERROR,
        payload: error,
      });
      // console.error(error);
    }
  };
};
