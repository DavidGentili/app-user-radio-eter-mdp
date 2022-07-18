import React from 'react'

const Program = ({program}) => {
     
    const { name, startHour, finishHour } = program;

    return (
        <div className='program'>
            <p className='hour'>{startHour}</p>
            <span className='circle'></span>
            <p className="name">{name}</p>
            <span className='line'></span>
        </div>
    )
}

export default Program