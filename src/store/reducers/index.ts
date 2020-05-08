import { combineReducers } from 'redux';
import { SampleAction, TestAction } from '../actions';
import SampleReducer from './sample';
import TestReducer from './test';

// combine every reducers for store initialization.
export default combineReducers({
    [SampleAction.Key]: SampleReducer,
    [TestAction.Key]: TestReducer
});
