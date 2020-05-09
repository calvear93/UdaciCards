import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import config from './config';
import middleware from './middleware';
import reducers from './reducers';

// creates Saga middleware factory.
const saga = createSagaMiddleware();
// creates the store with reducers and Saga middleware.
const store = createStore(persistReducer(config, reducers), applyMiddleware(saga));
// redux-persist persist handler.
const persistor = persistStore(store);

// runs Saga root middleware.
saga.run(middleware);

export { store, persistor };
