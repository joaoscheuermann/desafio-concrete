import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import status from './git/status'
import user from './git/user'
import repositories from './git/repositories'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
  status,
  user,
  repositories
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