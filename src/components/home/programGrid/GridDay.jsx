import React from 'react'


import Program from './Program'

import { getHoursDifference } from '@helpers/programGrid'

const GridDay = ({programs, dayName}) => {


    return (
        <div className='gridDay'>
            <h6>{dayName}</h6>
            {
                programs.map((program, i, array) => {
                    const start = program.startHour;
                    const finish = array[i+1] ? array[i+1].finishHour : program.finishHour;
                    return <Program key={program.id || i} program={program} height={getHoursDifference(start, finish)} />
                })
            }
        </div>
    )
}

export default GridDay