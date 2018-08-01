import { createSelector } from 'reselect';

const getImageInfoFilter = (state) => state.getImageReducer;
const getImageStatus = (state) => state.getImageReducer;

export const getImageInfo = createSelector(
    getImageInfoFilter,
    (getImage) => {
        if(getImage.get('payload').data) {
            const imageData = getImage.get('payload').data;
            console.log(imageData);
            return {
                imageId: imageData.id,
                imagePreview: imageData.images.fixed_width_small.url,
                imageOriginal: imageData.image_original_url,
                importDate: imageData.import_datetime,
                title: imageData.title
            };
        } else {
            return {};
        }
    }
);

export const getImageLoadingStatus = createSelector(
    getImageStatus,
    (status) => status.get('payload').isLoading
);
