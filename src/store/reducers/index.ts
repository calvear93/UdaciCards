import { combineReducers } from 'redux';
import { DeckAction } from '../actions';
import DeckReducer from './deck';

// combine every reducers for store initialization.
export default combineReducers({
    [DeckAction.Key]: DeckReducer
});
