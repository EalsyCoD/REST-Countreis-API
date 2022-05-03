export interface RootState {
    countries: CountriesState
    filter: FilterRootState
    country: CountryState
    notification: NotificationState
}

export type NotificationState = {
    message: string | null;
    status: number | null;
};

export type NotificationAction = {
    type: string;
    payload: NotificationState;
};

export type DispatchNotificationType = (
    args: NotificationAction
) => NotificationAction;

export type Filter = {
    region: Array<string>
}

export type Currencies = {
    name: string,
}
export type Languages = {
    name: string,
}

export type CountryState = [{
    name: string
    nativeName: string,
    population: number,
    subregion: string,
    region: string,
    capital: string,
    flags: FlagSVG,
    latlng: [],
    topLevelDomain: Array<string>,
    currencies: Currencies[],
    borders: [],
    languages: Languages[],
}]

export type Ctr = {
    name: string
    nativeName: string,
    population: number,
    subregion: string,
    region: string,
    capital: string,
    latlng: Array<number>,
    flags: FlagSVG,
    topLevelDomain: Array<string>
    currencies: Currencies[],
    borders: [],
    languages: Languages[],
}


export type CountryAction = {
    type: string,
    payload: CountryState
}

export type CountriesState = [{
    name: string
    population: number
    region: string
    capital: string
    flags: Flags
}]

export type Flags = {
    png: string
}

export type FlagSVG = {
    svg: string
}

export type CountriesAction = {
    type: string,
    payload: CountriesState
}


export type Countries = {
    name: string
    population: number,
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