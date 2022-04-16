import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { RootState, CountriesState, Countries } from '../../types'



const baseUrl: string = 'https://restcountries.com/v2'


const setCountries = (
name: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        try{
            const res = (await axios.get(
                `${baseUrl}/name/${name}`
            )) as { data: CountriesState }
            dispatch({
                type: 'NEW-COUNTRIES',
                payload: res.data,
            })
        }catch(err){}
    }
}


export { setCountries }