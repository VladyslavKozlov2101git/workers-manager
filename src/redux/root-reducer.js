import { combineReducers } from 'redux';
import workersReducer from './reducers';

const rootreducer = combineReducers({
  data: workersReducer,
});

export default rootreducer;
