import { GetErabiltzaileenKlipak as getErabiltzaileenKlipakAPI } from '../../api';
export const GET_KLIPAK_PENDING = 'GET_KLIPAK_PENDING';
export const GET_KLIPAK_SUCCESS = 'GET_KLIPAK_SUCCESS';
export const GET_KLIPAK_ERROR = 'GET_KLIPAK_ERROR';
export const getErabiltzaileenKlipak = (users) => {
  return async (dispatch) => {
    dispatch({
      type: GET_KLIPAK_PENDING,
    });
    const result = await getErabiltzaileenKlipakAPI(users);
    try {
      dispatch({
        type: GET_KLIPAK_SUCCESS,
        payload: {
          items: result,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_KLIPAK_ERROR,
        payload: error,
      });
    }
  };
};
