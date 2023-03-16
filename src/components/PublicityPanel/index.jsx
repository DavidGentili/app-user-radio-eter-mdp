import React, { useState, useEffect } from 'react'

import Publicity from '../Publicity';
import WeatherPanel from './WeatherPanel';

import { completePublicities } from '@helpers/publicity';
import { getOficialPublicities } from '@services/publicity';

export default function PublicityPanel({ horizontal, oficialPublicities }) {

    return (
        <article className={`publicityPanel ${horizontal ? 'horizontal' : ''}`}>
            <WeatherPanel />
            <Publicity publicity={oficialPublicities[0]} loading={oficialPublicities.length > 0} />
            <Publicity publicity={oficialPublicities[1]} loading={oficialPublicities.length > 0} />

        </article>
    )
}
