import React from 'react'


const Program = ({program, height}) => {

     
    const { name, startHour } = program;

    return (
        <div className='program' style={ {height : `${height * 36}px`} }>
            <p className='hour'>{startHour}</p>
            <span className='circle'></span>
            <p className="name">{name}</p>
            <span className='line'></span>
        </div>
    )
}

export default Program