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

      const { data } = (await axios.get<CountryState>(
        `${baseUrl}/name/${name}`
      ))
      dispatch({
        type: 'NEW-COUNTRY',
        payload: data,
      })

    } catch (error) {
    }
  }
}

export { setCountry }