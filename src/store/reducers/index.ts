import { combineReducers } from 'redux';
import { TestAction } from '../actions';
import TestReducer from './test';

// combine every reducers for store initialization.
export default combineReducers({
    [TestAction.Key]: TestReducer
});
