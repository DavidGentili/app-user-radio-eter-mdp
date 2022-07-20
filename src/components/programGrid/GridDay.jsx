import React from 'react'


import Program from './Program'

const GridDay = ({programs, dayName}) => {


    return (
        <div className='gridDay'>
            <h6>{dayName}</h6>
            {
                programs.map((program, i) => <Program key={program.id || i} program={program}/>)
            }
        </div>
    )
}

export default GridDay