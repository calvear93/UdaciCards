import { combineReducers } from 'redux';
import { SampleAction } from '../actions';
import SampleReducer from './sample';

// combine every reducers for store initialization.
export default combineReducers({
    [SampleAction.Key]: SampleReducer
});
