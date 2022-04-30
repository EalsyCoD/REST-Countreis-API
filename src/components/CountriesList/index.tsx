import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types'

import { Countrie } from './Countries'
import { Container } from './styles'

const CountriesList = (): JSX.Element => {
  const countries = useSelector((state: RootState) => {
    const countries = state.countries
    const isRegion = state.filter.region
    if (isRegion === 'Filter by Region') {
      return countries
    } else {
      return countries.filter((el) => el.region === isRegion)
    }
  })
  return (
    <React.Fragment>
      {countries.length > 0 ? (
        <Container>
          {countries.map((item) => (
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