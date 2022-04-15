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
            const { data } = (await axios.get(
                `${baseUrl}/name/${name}`
            )) as { data: CountriesState }

            const newCountries: CountriesState = {
                ...data,
                items: data.items.map((item: Countries) => ({
                    name: item.name,
                    population: item.population,
                    region: item.region,
                    capital: item.capital,
                })),
            }
            dispatch({
                type: 'NEW-COUNTRIES',
                payload: newCountries,
            })
        }catch(err){}
    }
}


export { setCountries }