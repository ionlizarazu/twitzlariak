import { GetErabiltzailearenKlipak as getErabiltzailearenKlipakAPI } from '../../api';
export const GET_KLIPAK_PENDING = 'GET_KLIPAK_PENDING';
export const GET_KLIPAK_SUCCESS = 'GET_KLIPAK_SUCCESS';
export const GET_KLIPAK_ERROR = 'GET_KLIPAK_ERROR';
export const getErabiltzailearenKlipak = (user) => {
  return async (dispatch) => {
    dispatch({
      type: GET_KLIPAK_PENDING,
    });
    const result = await getErabiltzailearenKlipakAPI(user.id);
    try {
      dispatch({
        type: GET_KLIPAK_SUCCESS,
        payload: {
          items: result,
        },
        user_id: user.id,
        username: user.display_name,
      });
    } catch (error) {
      dispatch({
        type: GET_KLIPAK_ERROR,
        payload: error,
      });
    }
  };
};
