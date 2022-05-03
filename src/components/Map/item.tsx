import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { icon } from 'leaflet'
import { Container } from './styles'
import { Ctr } from '../../types'


interface Props {
    data: Ctr
}
const LeafletIcon = icon({
    iconUrl: '../images/icon-location.svg',
    iconSize: [30, 40],
})

const Item: React.FC<Props> = ({ data }) => {
    const position = [data.latlng[0], data.latlng[1]]

    const CenterMap = ({ coords }: any) => {
        const map = useMap()
        map.setView(coords, map.getZoom())

        return null
    }

    return (
        <Container>
            {data.latlng[0] && data.latlng[1] &&
                <MapContainer
                    center={position}
                    zoom={13}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker icon={LeafletIcon} position={position}>
                        <Popup>
                            {data.name}
                        </Popup>
                    </Marker>
                    <CenterMap coords={position} />
                </MapContainer>
            }

        </Container>
    )
}

export { Item }