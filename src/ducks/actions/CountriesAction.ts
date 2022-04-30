import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { RootState, CountriesState } from '../../types'
import { clearFilter } from './FilterAction'
import { setNotification } from './NotificationAction'



const baseUrl: string = 'https://restcountries.com/v2'


const setCountries = (
    name: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        try {
            const { data } = (await axios.get<CountriesState>(
                `${baseUrl}/name/${name}`
            ))

            dispatch(clearFilter())
            dispatch({
                type: 'NEW-COUNTRIES',
                payload: data
            })
        } catch (err) {
            dispatch(setNotification('Страна не найденна!', 400, 3))
        }
    }
}


export { setCountries }