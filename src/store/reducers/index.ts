import { combineReducers } from 'redux';
import { InitAction, DeckAction, QuizAction } from '../actions';
import DeckReducer from './deck';
import InitReducer from './init';
import QuizReducer from './quiz';

// combine every reducers for store initialization.
export default combineReducers({
    [InitAction.Key]: InitReducer,
    [DeckAction.Key]: DeckReducer,
    [QuizAction.Key]: QuizReducer
});
