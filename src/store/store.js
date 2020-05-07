import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import middleware from './middleware';

// creates Saga middleware factory.
const saga = createSagaMiddleware();

// creates the store with reducers and Saga middleware.
export default createStore(reducers, applyMiddleware(saga));

// runs Saga root middleware.
saga.run(middleware);
