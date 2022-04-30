import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../ducks/actions/FilterAction'
import { CountryState, Ctr, Filter, RootState } from '../../types'

import { ContainerSelect, Select, Option } from './styles'

const FilterByRegion = (): JSX.Element => {
  const dispatch = useDispatch()
  const countries = useSelector((state: CountryState) => state)
  const [region, setRegion] = React.useState('Filter by Region')

  return (
    <React.Fragment>
      <ContainerSelect>
        <Select
          defaultValue={region}
          onChange={(e) => {
            dispatch(setFilter(e.target.value))
          }}
        >
          <Option>{region}</Option>
          <Option>Americas</Option>
          <Option>Asia</Option>
          <Option>Europe</Option>
          <Option>Oceania</Option>
        </Select>
      </ContainerSelect>
    </React.Fragment>
  )
}

export { FilterByRegion }