import React from 'react'

import { Container, SearchIcon, Input, Button } from './styles'

const SearchBar = (): JSX.Element => {
  const [value, setValue] = React.useState<string>('')

  const handleSubmit = () => {
    console.log('text')
  }

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
          }}
        />
        <Button onClick={handleSubmit}>
          Search
        </Button>
      </Container>
    </React.Fragment>
  )
}

export default SearchBar