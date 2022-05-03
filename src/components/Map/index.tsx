import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types'
import { Item } from './item'
import { ContainerMap } from './styles'



const Country = () => {
    const country = useSelector((state: RootState) => state.country)

    return (
        <React.Fragment>
            <ContainerMap>
                {country.map((item) => (
                    <Item key={item.name} data={item} />
                ))}
            </ContainerMap>
        </React.Fragment>
    )
}




export default Country