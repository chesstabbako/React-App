import Axios from "axios";
import { showError, showSuccess } from "./notificationActions";
const port= 'http://127.0.0.1:8000/api/usuarios';

const {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
  USER_EDIT_REQUEST,
  USER_EDIT_SUCCESS,
  USER_EDIT_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
} = require("src/constants/userConstants");

const allUserAction = () => async (dispatch, getState) => {

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'origin':'x-requested-with',
    'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
    'Content-Type': 'application/json',
  };

  try {
    dispatch({ type: USER_LIST_REQUEST });
    const response = await Axios.get(`${port}`, { headers });
    dispatch({ type: USER_LIST_SUCCESS, payload: response.data });
  } catch (error) {
    let message =
      error.response && error.response.data.error
        ? error.response.data.error
        : error.message;
    dispatch({ type: USER_LIST_FAIL, payload: message});
    dispatch(showError(message));
  }
};

const createUserAction = (user) => async (dispatch, getState) => {

  try {
    dispatch({ type: USER_CREATE_REQUEST });
   
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'origin':'x-requested-with',
      'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
      'Content-Type': 'application/json',
    };

    const response = await Axios.post(`${port}`, user, {
      headers,
    });
    if (response.status === 201) {
      dispatch({ type: USER_CREATE_SUCCESS, payload: response.data });
      dispatch(showSuccess("Usuario Creado con éxito"));
    }
    return response;
  } catch (error) {

    let message =
      error.response && error.response.data.error
        ? error.response.data.error
        : error.message;

    dispatch({
      type: USER_CREATE_FAIL,
      payload:
        message
    });
    dispatch(showError(message));
  }
};

const editUserAction = (userId, user) => async (dispatch, getState) => {

  try {
    dispatch({ type: USER_EDIT_REQUEST });

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'origin':'x-requested-with',
      'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
      'Content-Type': 'application/json',
    };
    const response = await Axios.put(
      `${port}/${userId}`,
      user,
      {
        headers,
      }
    );
    if (response.status === 200) {
      dispatch({ type: USER_EDIT_SUCCESS, payload: response.data });
      dispatch(showSuccess("Usuario editado satisfactoriamente"));
    }
    return response;
  } catch (error) {
    let message =
      error.response && error.response.data.error
        ? error.response.data.error
        : error.message;
    dispatch({
      type: USER_EDIT_FAIL,
      payload:
        message
    });
    dispatch(showError(message));
  }
};

const deleteUserAction = (userId) => async (dispatch, getState) => {

  try {
    dispatch({ type: USER_DELETE_REQUEST });

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'origin':'x-requested-with',
      'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
      'Content-Type': 'application/json',
    };

    const response = await Axios.delete(
      `${port}/${userId}`,
      {
        headers,
      }
    );
    if (response.status === 200) {
      dispatch({ type: USER_DELETE_SUCCESS, payload: userId });
      dispatch(showSuccess("Usuario eliminado satisfactoriamente"));
    }
  } catch (error) {
    let message =
      error.response && error.response.data.error
        ? error.response.data.error
        : error.message;

    dispatch({
      type: USER_DELETE_FAIL,
      payload: message,
    });

    dispatch(showError(message));
  }
};

export { allUserAction, createUserAction, editUserAction, deleteUserAction };
