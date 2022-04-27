import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types'
import { Item } from './item'
import { useNavigate } from 'react-router-dom';
import image from '../../assets/arrow-back.svg'
import {
    Button,
    Container,
    Arrow,
    Arow,
} from './styles'


interface Props {
    name: string
}
const Country: React.FC<Props> = ({ name }) => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const countr = useSelector((state: RootState) => state.country)

    return (
        <React.Fragment>
            <Arow>
                <Button onClick={() => goBack()} type='submit'><Arrow src={image}></Arrow>Back</Button>
            </Arow>
            <Container>
                {countr.map((item) => (
                    <Item key={item.name} data={item} />
                ))}
            </Container>
        </React.Fragment>
    )
}




export default Country