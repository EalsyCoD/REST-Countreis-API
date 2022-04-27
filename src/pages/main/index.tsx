import React from 'react'


import CountriesList from '../../components/CountriesList'
import SearchBar from '../../components/SearchBar'
import FilterPanel from '../../FilterPanel'


const MainPage = (): JSX.Element => {
    return (
        <React.Fragment>
            <FilterPanel />
            <SearchBar />
            <CountriesList />
        </React.Fragment>
    )
}


export default MainPage;