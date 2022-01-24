import * as types from './actionTypes';
import axios from 'axios';

const getAllWorkers = () => ({
  type: types.GET_ALL_WORKERS,
});

const getAllWorkersSuccess = (workers) => ({
  type: types.GET_ALL_WORKERS_SUCCESS,
  payload: workers,
});

const getAllWorkersFail = (error) => ({
  type: types.GET_ALL_WORKERS_FAIL,
  payload: error,
});

const createWorker = () => ({
  type: types.CREATE_WORKER,
});

const createWorkerSuccess = (worker) => ({
  type: types.CREATE_WORKER_SUCCESS,
  payload: worker,
});

const createWorkerFail = (error) => ({
  type: types.CREATE_WORKER_FAIL,
  payload: error,
});

const deleteWorker = () => ({
  type: types.REMOVE_WORKER,
});

const deleteWorkerSuccess = () => ({
  type: types.REMOVE_WORKER_SUCCESS,
});

const deleteWorkerFail = (error) => ({
  type: types.REMOVE_WORKER_FAIL,
  payload: error,
});

export const fetchWorkers = () => {
  return (dispatch) => {
    dispatch(getAllWorkers());
    axios
      .get(
        `https://workers-manager-5afcd-default-rtdb.europe-west1.firebasedatabase.app/workers.json`,
      )
      .then((res) => {
        dispatch(getAllWorkersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getAllWorkersFail(err.message));
      });
  };
};

export const addWorker = ({ date_hire, first_name, fop, last_name, position, salary, taxes }) => {
  return (dispatch) => {
    dispatch(createWorker());

    axios
      .post(
        `https://workers-manager-5afcd-default-rtdb.europe-west1.firebasedatabase.app/workers.json`,
        {
          date_hire,
          first_name,
          fop,
          last_name,
          position,
          salary,
          taxes,
        },
      )
      .then((res) => {
        dispatch(createWorkerSuccess(res.data)).then(dispatch(fetchWorkers()));
      })
      .catch((err) => {
        dispatch(createWorkerFail(err.message));
      });
  };
};

export const removeWorker = (id) => {
  return (dispatch) => {
    dispatch(deleteWorker());
    axios
      .delete(
        `https://workers-manager-5afcd-default-rtdb.europe-west1.firebasedatabase.app/workers/${id}.json`,
      )
      .then((res) => {
        dispatch(deleteWorkerSuccess(res.data)).then(dispatch(fetchWorkers()));
      })
      .catch((err) => {
        dispatch(deleteWorkerFail(err.message));
      });
  };
};
