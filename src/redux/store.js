import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import sagas and reducer
import reducers from './reducer';
import rootSaga from './saga';

import loggingMiddleware from './logging';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  {},
  applyMiddleware(sagaMiddleware, loggingMiddleware),
);

sagaMiddleware.run(rootSaga);

export { store };
