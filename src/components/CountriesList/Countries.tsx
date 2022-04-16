import React from 'react'
import { Countries } from '../../types'

import {
    CountriesContainer,
  IconCountrie,
  Content,
  FullName,
  Name,
  Population,
  TopicsContainer,
  Region,
  Capital,
  IconContainer

} from './styles'

interface Props {
  data: Countries
}

const Countrie: React.FC<Props> = ({data}) => {
  return (
    <CountriesContainer>
      <Content>
      <IconContainer>
      <IconCountrie src={data.flags.png} alt={data.flags.png} loading="lazy" />
      </IconContainer>
      <FullName>
          <Name>{data.name}</Name>
        </FullName>
          <Population>
           Population: {data.population}
          </Population>
          <TopicsContainer>
              <Region>Region: {data.region}</Region>
          </TopicsContainer>
              <Capital>
                Capital: {data.capital}
              </Capital>
      </Content>
    </CountriesContainer>
  )
}

export { Countrie }