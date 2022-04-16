import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { RootState } from './types'

import countriesReducer from './ducks/reducers/CountriesReducer'
import filterReducer from './ducks/reducers/FilterReducer'
import countryReducer from './ducks/reducers/CountryReducer'

const reducer = combineReducers<RootState>({
    countries:countriesReducer,
    filter: filterReducer,
    country: countryReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store