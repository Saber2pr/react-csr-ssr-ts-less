import { combineReducers, createStore } from 'redux'

import * as reducers from './reducers'

export const store = createStore(combineReducers(reducers))
