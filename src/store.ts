import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { RootState } from './types'

import countriesReducer from './ducks/reducers/CountriesReducer'

const reducer = combineReducers<RootState>({
    countries:countriesReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store