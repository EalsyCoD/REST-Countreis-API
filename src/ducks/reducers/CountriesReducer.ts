import { CountriesState, CountriesAction } from '../../types'

const initialState: CountriesState = [{
  name: '',
  population: 0,
  region: '',
  capital: '',
  flags: {
    png: '',
  },
}]

const CountriesReducer = (
  state: CountriesState = initialState,
  action: CountriesAction
): CountriesState => {
  switch (action.type) {
    case 'NEW-COUNTRIES':
      return action.payload

    default:
      return state
  }
}


export default CountriesReducer