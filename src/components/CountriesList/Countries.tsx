import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Countries, RootState } from '../../types'

import {
  CountriesContainer,
  IconCountrie,
  Content,
  FullName,
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
  const country = useSelector((state: RootState) => {
    return state.country
  })
  return (
    <CountriesContainer>
      <Content>
        <IconContainer>
          <IconCountrie src={data.flags.png} alt={data.flags.png} loading="lazy" />
        </IconContainer>
        <Link to={`/country/${country.name}`}>
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