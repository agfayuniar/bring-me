import React, { useEffect, useState } from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
import { useSelector } from 'react-redux'

const MapCustom = (props) => {
    const [country, setCountry] = useSelector((state) => state.search.selectedCountry)
    const [position, setPosition] = useState({ lat: 47.444, lng: -122.176 })

    useEffect(() => {
        switch (country) {
            case 'Indonesia':
                setPosition({ lat: 0.7893, lng: 113.9213 })
                break
            case 'Kamboja':
                setPosition({ lat: 12.5657, lng: 104.9910 })
                break
            case 'Laos':
                setPosition({ lat: 17.974855, lng: 102.630867 })
                break
            case 'Malaysia':
                setPosition({ lat: 4.2105, lng: 101.9758 })
                break
            case 'Myanmar':
                setPosition({ lat: 16.871311, lng: 96.199379 })
                break
            case 'Filipina':
                setPosition({ lat: 12.8797, lng: 121.7740 })
                break
            case 'Singapura':
                setPosition({ lat: 1.290270, lng: 103.851959 })
                break
            case 'Thailand':
                setPosition({ lat: 15.8700, lng: 100.9925 })
                break
            case 'Vietnam':
                setPosition({ lat: 14.0583, lng: 108.2772 })
                break
            case 'Brunei Darussalam':
                setPosition({ lat: 4.5353, lng: 114.7277 })
                break
            default:
                setPosition({ lat: 47.444, lng: -122.176 })
                break
        }
    }, [country])

    return (
        <Map
            google={props.google}
            zoom={4}
            style={{
                width: '100%',
                height: '400px',
            }}
            initialCenter={position}
        >
            <Marker position={position} />
        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapCustom);


