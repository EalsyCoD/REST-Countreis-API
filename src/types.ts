export interface RootState {
countries: CountriesState
filter: FilterRootState
country: CountryState
}

export type Filter = {
region: Array<string>
}

export type Currencies = {
 name: string,
}
export type Languages = {
 name: string,
}

export type CountryState = {
        name: string
        nativeName: string,
        population: number,
        subregion: string,
        region: string,
        capital: string,
        topLevelDomain: Array<string>
        currencies: Currencies[],
        languages: Languages[],
      }

 export type CountryAction ={
     type: string,
     payload: CountryState
 }     

export type CountriesState = [
{
    name: string
    population: number
    region: string
    capital: string
    flags: Flags
},
]

// export type Countriess = {
//     items: ICountries[]
// }

// export type ICountries = {
//     name: string
//     population: number
//     region: string
//     capital: string
//     flags: Flags
// }

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

export type FilterRootState = {
    region: string
  }
  export type FilterAction = {
    type: string
    payload: FilterRootState
  }
  export type DispatchFilterType = (args: FilterAction) => FilterAction