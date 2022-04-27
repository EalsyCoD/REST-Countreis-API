import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

import {
  RootState,
  CountryState,

} from '../../types'

const baseUrl: string = 'https://restcountries.com/v2'

const setCountry = (
  name: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {

      const { data } = (await axios.get(`${baseUrl}/name/${name}`)) as {
        data: CountryState
      }

      const newData: CountryState = {
        name: data.name,
        nativeName: data.nativeName,
        population: data.population,
        subregion: data.subregion,
        region: data.region,
        capital: data.capital,
        topLevelDomain: data.topLevelDomain === null ? [] : data.topLevelDomain,
        currencies: data.currencies ? [] : data.currencies,
        languages: data.languages ? [] : data.languages
      }

      dispatch({
        type: 'NEW-COUNTRY',
        payload: newData,
      })

    } catch (error) {
    }
  }
}

export { setCountry }