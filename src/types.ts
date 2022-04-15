export interface RootState {
countries: CountriesState
}


export type CountriesState = {
items: Countries[]
}


export type CountriesAction = {
    type: string,
    payload: CountriesState
}


export type Countries = {
    name: string
    population: string,
    region: string,
    capital: string,
}