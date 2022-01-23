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
  USER_EDITED,
  USER_CREATED,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
} = require("src/constants/userConstants");

const initialState = {
  users: [],
  loading: false,
  error: false,
  userCreated: false,
  userEdited: false,
};

export const userAllReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { ...state, ...{ loading: true } };
    case USER_LIST_SUCCESS:
      return { ...state, ...{ loading: false, users: action.payload, error:false } };
    case USER_LIST_FAIL:
      return { ...state, ...{ loading: false, error: action.payload } };
    case USER_CREATE_REQUEST:
      return { ...state, ...{ loading: true } };
    case USER_CREATE_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          userCreated: true,
          users: [...state.users, action.payload],
          error: false
        },
      };
    case USER_CREATE_FAIL:
      return { ...state, ...{ loading: false, error: action.payload } };
    case USER_EDIT_REQUEST:
      return { ...state, ...{ loading: true } };
    case USER_EDIT_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          userEdited: true,
          error: false,
          users: [
            ...state.users.map((user) =>
              user.id === action.payload.id ? action.payload : user
            ),
          ],
        },
      };
    case USER_EDIT_FAIL:
      return { ...state, ...{ loading: false, error: action.payload } };
    case USER_EDITED:
      return { ...state, ...{ userEdited: action.payload } };
      case USER_CREATED:
      return { ...state, ...{ userCreated: action.payload } };
    case USER_DELETE_REQUEST:
      return { ...state, ...{ loading: true } };
    case USER_DELETE_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          users: [
            ...state.users.filter((user) =>
              user.id !== action.payload
            ),
          ],
        },
      };
    case USER_DELETE_FAIL:
      return { ...state, ...{ loading: false, error: action.payload } };

    default:
      return state;
  }
};
