import { CONSTANTS } from '../constants';

export const imageHistoryAddAction = ( imageInfo ) => {
    return {
      type: CONSTANTS.SET_IMAGE_HISTORY_ADD,
      payload: { imageInfo }
    };
};

export const imageHistoryDeleteAction = ( imageId ) => {
    return {
        type: CONSTANTS.SET_IMAGE_HISTORY_DELETE,
        payload: { imageId }
    };
};

export const imageHistoryClearAction = () => {
    return {
        type: CONSTANTS.SET_IMAGE_HISTORY_CLEAR
    };
};
