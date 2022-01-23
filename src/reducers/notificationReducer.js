import {
  SHOW_ERROR,
  SHOW_INFO,
  SHOW_SUCCESS,
  SHOW_WARNING,
} from "src/constants/notificationConstants";
const initialState = {
  message: "",
  level: "info",
  id: null,
  title: "",
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INFO:
      return {
        message: action.payload.message,
        level: "info",
        id: action.payload.id,
        title: "Info!"
      };
    case SHOW_ERROR:
      return {
        message: action.payload.message,
        level: "error",
        id: action.payload.id,
        title: "Error!"
      };
    case SHOW_SUCCESS:
      return {
        message: action.payload.message,
        level: "success",
        id: action.payload.id,
        title: "success"
      };
    case SHOW_WARNING:
      return {
        message: action.payload.message,
        level: "warning",
        id: action.payload.id,
        title: "Warning!"
      };
    default:
      return state;
  }
};
