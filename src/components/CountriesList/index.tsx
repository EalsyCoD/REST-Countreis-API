import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types'

import { Countrie } from './Countries'
import { Container } from './styles'

const CountriesList = (): JSX.Element => {
  const countries = useSelector((state: RootState) => state.countries)
  console.log(countries)
  return (
    <React.Fragment>
      <Container>
          <React.Fragment>
            {countries.map((item: any) => (
              <Countrie key={item.name} data={item} />
            ))}
          </React.Fragment>
          <React.Fragment></React.Fragment>
      </Container>
    </React.Fragment>
  )
}

export default CountriesList