import { CONSTANTS } from '../constants';

export const getImageAction = () => {
  return {
    type: CONSTANTS.GET_IMAGE_REQUEST,
    payload: { error: false, isLoading: true }
  };
};

export const getImageActionSuccess = (data) => {
  return {
    type: CONSTANTS.GET_IMAGE_SUCCESS,
    payload: { data, error: false, isLoading: false }
  };
};

export const getImageActionFail = (error) => {
  return {
    type: CONSTANTS.GET_IMAGE_FAIL,
    payload: { error, isLoading: false }
  };
};
