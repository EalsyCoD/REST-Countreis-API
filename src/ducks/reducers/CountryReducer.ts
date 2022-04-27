import { CountryState, CountryAction } from '../../types'

const initialState: CountryState = [{
  name: '',
  nativeName: '',
  population: 0,
  subregion: '',
  region: '',
  capital: '',
  flags: {
    svg: ''
  },
  topLevelDomain: [],
  currencies: [],
  languages: [],
  borders: [],
}]


const RepoReducer = (
  state: CountryState = initialState,
  action: CountryAction
): CountryState => {
  console.log(action.payload)
  switch (action.type) {
    case 'NEW-COUNTRY':
      return action.payload

    default:
      return state
  }
}

export default RepoReducer