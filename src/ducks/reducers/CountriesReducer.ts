import { CountriesState, CountriesAction } from '../../types'

const initialState: CountriesState = {
  items: [],
}

const CountriesReducer = (
  state: CountriesState = initialState,
  action: CountriesAction
): CountriesState => {
  switch (action.type) {
    case 'NEW-COUNTRIES':
      return {
        items: action.payload.items
      }

    default:
      return state
  }
}

export default CountriesReducer