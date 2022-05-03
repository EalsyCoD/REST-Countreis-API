import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../ducks/actions/FilterAction'
import { CountryState, Ctr, Filter, RootState } from '../../types'

import { ContainerSelect, Select, Option } from './styles'


const FilterByRegion = (): JSX.Element => {
  const dispatch = useDispatch()
  const countries = useSelector((state: RootState) => state)
  const [region, setRegion] = React.useState('Filter by Region')
  const Region = [
    'Americas',
    'Asia',
    'Europe',
    "Oceania",
  ]

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
          {Region.map((item, i) => (
            <Option key={i}>{item}</Option>
          ))}
        </Select>
      </ContainerSelect>
    </React.Fragment>
  )
}

export { FilterByRegion }