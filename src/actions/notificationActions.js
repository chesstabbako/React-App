import { SHOW_ERROR, SHOW_INFO, SHOW_SUCCESS, SHOW_WARNING } from "src/constants/notificationConstants";
import { v4 as uuidv4 } from "uuid";

export const showSuccess = (message) => (dispatch) => {
  dispatch({
    type: SHOW_SUCCESS,
    payload: { message, id: uuidv4() },
  });
};

export const showError = (message) => (dispatch) => {
  dispatch({
    type: SHOW_ERROR,
    payload: { message, id: uuidv4() },
  });
};

export const showWarning = (message) => (dispatch) => {
  dispatch({
    type: SHOW_WARNING,
    payload: { message, id: uuidv4() },
  });
};

export const showInfo = (message) => (dispatch) => {
  dispatch({
    type: SHOW_INFO,
    payload: { message, id: uuidv4() },
  });
};
