import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCountries } from '../../ducks/actions/CountriesAction'

import { Container, SearchIcon, Input } from './styles'

const SearchBar = (): JSX.Element => {
  const dispatch = useDispatch()
  const [value, setValue] = React.useState<string>('')

  return (
    <React.Fragment>
      <Container>
        <SearchIcon />
        <Input
          type='text'
          placeholder="Search for a country..."
          value={value}
          onChange={(event) => {
            setValue(event.target.value)

            if (event.target.value.length !== 0) {
              dispatch(setCountries(event.target.value))
            }
          }}
        />
      </Container>
    </React.Fragment>
  )
}

export default SearchBar