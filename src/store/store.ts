import {applyMiddleware, combineReducers,createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/allReducers'

const rootReduser = combineReducers(reducers)

export const store = createStore(rootReduser, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch