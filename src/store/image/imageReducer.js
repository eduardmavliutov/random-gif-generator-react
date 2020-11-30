import { ADD_IMAGE, START_LOADING, FINISH_LODAING, DELETE_IMAGE } from "./imageActionTypes";

const initialState = {
  images: [],
  loading: false,
}

export const imageReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_IMAGE: 
      return {
        ...state,
        images: [...state.images, action.image],
      }
    case START_LOADING: 
      return {
        ...state,
        loading: true
      }
    case FINISH_LODAING: 
      return {
        ...state,
        loading: false
      }
    case DELETE_IMAGE: 
      return {
        ...state,
        images: state.images.filter((image) => image.id !== action.id)
      }
    default: 
      return state;
  }
}