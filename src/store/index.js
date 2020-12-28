import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import rootSagas from './sagas';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, logger];
  const enhancers = compose(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, enhancers);
  sagaMiddleware.run(rootSagas);
  return store;
};

export default configureStore();
