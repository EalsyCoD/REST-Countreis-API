import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { RootState, CountriesState } from '../../types'
import { setFilter } from './FilterAction'



const baseUrl: string = 'https://restcountries.com/v2'


const setCountries = (
    name: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        try {
            const { data } = (await axios.get<CountriesState>(
                `${baseUrl}/name/${name}`
            ))
            dispatch({
                type: 'NEW-COUNTRIES',
                payload: data
            })
        } catch (err) { }
    }
}


export { setCountries }