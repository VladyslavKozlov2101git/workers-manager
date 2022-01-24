import * as types from './actionTypes';

const initialState = {
  workers: {},
  loading: false,
  error: null,
};

const workersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_WORKERS:
      return {
        ...state,
        loading: true,
      };

    case types.GET_ALL_WORKERS_SUCCESS:
      return {
        ...state,
        loading: false,
        workers: action.payload,
      };

    case types.GET_ALL_WORKERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.CREATE_WORKER:
      return {
        ...state,
        loading: true,
      };

    case types.CREATE_WORKER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.CREATE_WORKER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.REMOVE_WORKER:
      return {
        ...state,
        loading: true,
      };

    case types.REMOVE_WORKER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.REMOVE_WORKER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default workersReducer;
