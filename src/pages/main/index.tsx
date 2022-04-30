import React from 'react'


import CountriesList from '../../components/CountriesList'
import SearchBar from '../../components/SearchBar'
import FilterPanel from '../../components/FilterPanel'
import { Notification } from '../../components/Notification/Notification'


const MainPage = (): JSX.Element => {
    return (
        <React.Fragment>
            <Notification />
            <FilterPanel />
            <SearchBar />
            <CountriesList />
        </React.Fragment>
    )
}


export default MainPage;