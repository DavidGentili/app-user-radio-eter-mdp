import React, { useState, useEffect } from 'react'

import Publicity from '../Publicity';
import WeatherPanel from './WeatherPanel';

import { completePublicities } from '@helpers/publicity';
import { getOficialPublicities } from '@services/publicity';

export default function PublicityPanel({ horizontal }) {

    const [oficialPublicities, setOficialPublicities] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getOficialPublicities()
            .then(data => {
                completePublicities(data);
                setOficialPublicities(data);
            })
            .catch()
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <article className={`publicityPanel ${horizontal ? 'horizontal' : ''}`}>
            <WeatherPanel />
            <Publicity publicity={oficialPublicities[0]} loading={isLoading} />
            <Publicity publicity={oficialPublicities[1]} loading={isLoading} />

        </article>
    )
}
