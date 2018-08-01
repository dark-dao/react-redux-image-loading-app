import { createSelector } from 'reselect';

const getImagesFromHistory = (state) => state.imagesHistoryReducer;

export const getImagesList = createSelector(
    getImagesFromHistory,
    (list) => {
        console.log('LIST');
        console.log(list);
        return list.get('imagesList').map(item => {
            return {
                imageId: item.id,
                imagePreview: item.images.fixed_width_small.url,
                imageOriginal: item.image_original_url,
                importDate: item.import_datetime,
                title: item.title
            };
        });
    }
);
