import React from 'react'


import { FilterByRegion } from './FilterByRegion'
import { Container } from './styles'

const FilterPanel = (): JSX.Element => {

  return (
    <React.Fragment>
      <Container>
        <FilterByRegion />
      </Container>
    </React.Fragment>
  )
}

export default FilterPanel