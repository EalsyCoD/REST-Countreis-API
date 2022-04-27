import React from 'react'
import { Link } from 'react-router-dom'
import { Countries } from '../../types'

import {
  CountriesContainer,
  IconCountrie,
  Content,
  Name,
  Population,
  Region,
  Capital,
  IconContainer

} from './styles'

interface Props {
  data: Countries
}

const Countrie: React.FC<Props> = ({ data }) => {
  return (
    <CountriesContainer>
      <Content>
        <IconContainer>
          <IconCountrie src={data.flags.png} alt={data.flags.png} loading="lazy" />
        </IconContainer>
        <Link to={`/country/${data.name}`}>
          <Name>{data.name}</Name>
        </Link>
        <Population>
          Population: {data.population}
        </Population>
        <Region>
          Region: {data.region}
        </Region>
        <Capital>
          Capital: {data.capital}
        </Capital>
      </Content>
    </CountriesContainer>
  )
}

export { Countrie }