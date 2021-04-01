import {
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_RESET,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_DETAILS_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_RESET,
} from '../constants/userConstants';

export const userLoginReducer = (state = { product: { review: [] } }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      //request요청이 들어오면 아래 state를 반환
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      //success요청이 들어오면 아래 state를 반환
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      //fail요청이 들어오면 아래 state를 반환
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      //request요청이 들어오면 아래 state를 반환
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      //success요청이 들어오면 아래 state를 반환
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      //fail요청이 들어오면 아래 state를 반환
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      //request요청이 들어오면 아래 state를 반환
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      //success요청이 들어오면 아래 state를 반환
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      //fail요청이 들어오면 아래 state를 반환
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { user: {} };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      //request요청이 들어오면 아래 state를 반환
      return { loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      //success요청이 들어오면 아래 state를 반환
      return { loading: false, success: true, userInfo: action.payload };
    case USER_UPDATE_PROFILE_FAIL:
      //fail요청이 들어오면 아래 state를 반환
      return { loading: false, error: action.payload };
    case USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      //request요청이 들어오면 아래 state를 반환
      return { loading: true };
    case USER_LIST_SUCCESS:
      //success요청이 들어오면 아래 state를 반환
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      //fail요청이 들어오면 아래 state를 반환
      return { loading: false, error: action.payload };
    case USER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      //request요청이 들어오면 아래 state를 반환
      return { loading: true };
    case USER_DELETE_SUCCESS:
      //success요청이 들어오면 아래 state를 반환
      return { loading: false, success: true };
    case USER_DELETE_FAIL:
      //fail요청이 들어오면 아래 state를 반환
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      //request요청이 들어오면 아래 state를 반환
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      //success요청이 들어오면 아래 state를 반환
      return { loading: false, success: true };
    case USER_UPDATE_FAIL:
      //fail요청이 들어오면 아래 state를 반환
      return { loading: false, error: action.payload };
    case USER_UPDATE_RESET:
      return {
        user: {},
      };
    default:
      return state;
  }
};
