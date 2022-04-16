import { CountryState, CountryAction } from '../../types'

const initialState: CountryState = {
    name: '',
    nativeName: '',
    population: 0,
    subregion: '',
    region: '',
    capital: '',
    topLevelDomain: [],
    currencies: [],
    languages: [],
  }


const RepoReducer = (
  state: CountryState = initialState,
  action: CountryAction
): CountryState => {
  switch (action.type) {
    case 'NEW-COUNTRY':
      return action.payload

    default:
      return state
  }
}

export default RepoReducer