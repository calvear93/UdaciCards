import { combineReducers } from 'redux';
import { InitAction, DeckAction } from '../actions';
import DeckReducer from './deck';
import InitReducer from './init';

// combine every reducers for store initialization.
export default combineReducers({
    [InitAction.Key]: InitReducer,
    [DeckAction.Key]: DeckReducer
});
