import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import reducers from '../reducers/rootReducer';

export const history = createHistory();
export default function configureStore() {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(reducers, middlewareEnhancer);
  return store;
}
  