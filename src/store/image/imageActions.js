import axios from 'axios';
import { ADD_IMAGE, FETCH_RANDOM_IMAGE, FINISH_LODAING, START_LOADING, DELETE_IMAGE } from './imageActionTypes';

export const getRandomImage = () => {
  return {
    type: FETCH_RANDOM_IMAGE
  }
};

export const addImage = (image) => {
  return {
    type: ADD_IMAGE,
    image
  }
};

export const startLoading = () => {
  return {
    type: START_LOADING
  }
};

export const finishLoading = () => {
  return {
    type: FINISH_LODAING
  }
}

export const deleteImage = (id) => {
  return {
    type: DELETE_IMAGE,
    id
  }
}

export const fetchRandomImage = () => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA')
      const responseData = await response.data;
      const image = {
        id: responseData.data.id + Date.now(),
        src: responseData.data.images.original.url,
        title: responseData.data.title.trim() ? responseData.data.title.trim() : 'random gif',
        timestamp: responseData.data.import_datetime
      };
      dispatch(addImage(image));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(finishLoading());
    }
  }
};