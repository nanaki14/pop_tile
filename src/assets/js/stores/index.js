import { applyMiddleware, createStore, compose } from 'redux';
import reducer from '../reducers';

const configureStore = initialState => {
  const store = createStore(reducer, initialState)

  return store;
}

export default configureStore;
