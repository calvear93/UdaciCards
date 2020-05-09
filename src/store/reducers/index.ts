import { combineReducers } from 'redux';
import { SampleAction, DeckAction } from '../actions';
import SampleReducer from './sample';
import DeckReducer from './deck';

// combine every reducers for store initialization.
export default combineReducers({
    [SampleAction.Key]: SampleReducer,
    [DeckAction.Key]: DeckReducer
});
