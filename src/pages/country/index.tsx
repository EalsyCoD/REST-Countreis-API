import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCountry } from '../../ducks/actions/CountryAction'
import Country from '../../components/Country'
import Map from '../../components/Map'

export type RouteParams =
    | {
        name: string,
    }
    | Record<string, string | any>;

const CountryPage = (): JSX.Element => {
    const params = useParams<RouteParams>()
    const dispatch = useDispatch()



    React.useEffect(() => {
        const name: string = `/${params.name}`
        dispatch(setCountry(name))
    }, [dispatch, params.name])
    return (
        <React.Fragment>
            <Country name={params.name} />
            <Map />
        </React.Fragment>
    )
}


export default CountryPage