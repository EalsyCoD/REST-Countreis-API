import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../ducks/actions/FilterAction'
import { Filter, RootState } from '../../types'

import { ContainerSelect, Select, Option } from './styles'

const FilterByRegion = (): JSX.Element => {
  const dispatch = useDispatch()
  const countries = useSelector((state: RootState) => state.countries)
  const isValue = useSelector((state: RootState) => state.filter.region)
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
          <Option>Filter by Region</Option>
          {Object.keys(countries).map((value, i) => <Option key={i} value={value}>{value}</Option>)}
        </Select>
      </ContainerSelect>
    </React.Fragment>
  )
}

export { FilterByRegion }