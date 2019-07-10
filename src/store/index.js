import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import git from './git/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
  git
})

const middlewares = applyMiddleware(
  thunk
)

const enhancer = composeEnhancers(
  middlewares
)

export default createStore(
  reducer,
  enhancer
)