import { GetErabiltzailearenBideoak as getErabiltzailearenBideoakAPI } from '../../api';
export const GET_BIDEOAK_PENDING = 'GET_BIDEOAK_PENDING';
export const GET_BIDEOAK_SUCCESS = 'GET_BIDEOAK_SUCCESS';
export const GET_BIDEOAK_ERROR = 'GET_BIDEOAK_ERROR';
export const getErabiltzailearenBideoak = (user) => {
  return async (dispatch) => {
    dispatch({
      type: GET_BIDEOAK_PENDING,
    });
    const result = await getErabiltzailearenBideoakAPI(user.id);
    try {
      dispatch({
        type: GET_BIDEOAK_SUCCESS,
        payload: {
          items: result,
        },
        user_id: user.id,
        username: user.display_name,
      });
    } catch (error) {
      dispatch({
        type: GET_BIDEOAK_ERROR,
        payload: error,
      });
    }
  };
};
