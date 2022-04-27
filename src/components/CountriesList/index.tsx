import React from 'react'
import { useSelector } from 'react-redux'
import { CountriesState, RootState } from '../../types'

import { Countrie } from './Countries'
import { Container } from './styles'

const CountriesList = (): JSX.Element => {
  const countries = useSelector((state: RootState) => state.countries)
  //   const countries = state.countries
  //   const region = state.filter.region
  //   if(region === 'Filter by Region'){
  //     return countries
  //   } else{
  //     return countries.filter((el) => el.region === region)
  //   }
  // })
  console.log(countries)
  return (
    <React.Fragment>
      {countries.length > 0 ? (
        <Container>
          {countries.map((item: any) => (
            <Countrie key={item.name} data={item} />
          ))}
        </Container>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </React.Fragment>
  )
}

export default CountriesList