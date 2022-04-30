import React from 'react'
import { Ctr } from '../../types'



import {
    ImageCountry,
    ItemContainer,
    Image,
    Name,
    NameCountry,
    NativeName,
    Population,
    Region,
    SubRegion,
    Capital,
    TopLevelDomain,
    Currencies,
    Languages,
    Domain,
    Language,
    Topic,
    Topics,
    Border,
    Cur,
} from './styles'


interface Props {
    data: Ctr
}


const Item: React.FC<Props> = ({ data }) => {
    return (
        <React.Fragment>
            <ItemContainer>
                <Image>
                    <ImageCountry src={data.flags.svg} alt={data.flags.svg} />
                </Image>
                <Name>
                    <NameCountry>{data.name}</NameCountry>
                    <NativeName>Native Name: {data.name}</NativeName>
                    <Population>Population: {data.population}</Population>
                    <Region>Region: {data.region}</Region>
                    <SubRegion>Sub Region: {data.subregion}</SubRegion>
                    {data.capital !== undefined ? (
                        <Capital>Capital: {data.capital}</Capital>
                    ) : (
                        <React.Fragment></React.Fragment>
                    )}

                    {data.borders !== undefined ? (
                        <Border>
                            <Topic>Border Countries:
                                {data.borders.map((item, i) => (
                                    <Topics key={i}>{item},</Topics>
                                ))}
                            </Topic>
                        </Border>
                    ) : (
                        <React.Fragment></React.Fragment>
                    )}
                </Name>
                <Domain>
                    <TopLevelDomain>Top Level Domain: {data.topLevelDomain}</TopLevelDomain>
                    {data.currencies !== undefined ? (
                        <Cur>
                            {data.currencies.map((item, i) => (
                                <Currencies key={i}>Currencies: {item.name}</Currencies>
                            ))}
                        </Cur>
                    ) : (
                        <React.Fragment></React.Fragment>
                    )}

                    <Language>Languages:
                        {data.languages.map((item, i) => (
                            <Languages key={i}>{item.name},</Languages>
                        ))}
                    </Language>
                </Domain>
            </ItemContainer>
        </React.Fragment>
    )
}


export { Item }