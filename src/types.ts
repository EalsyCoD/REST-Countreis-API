export interface RootState {
countries: CountriesState
}


export type CountriesState = [
{
    name: string
    population: number
    region: string
    capital: string
    flags: Flags
}
]

export type Flags = {
    png: string
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
    flags: Flags
}