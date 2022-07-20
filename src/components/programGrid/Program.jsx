import React from 'react'

const getHoursDifference = (start, finish) => {
    const hours = finish.split(':')[0] - start.split(':')[0]; 
    const minutes = (finish.split(':')[1] - start.split(':')[1]) / 60;
    return hours + minutes;
}

const Program = ({program}) => {

     
    const { name, startHour, finishHour } = program;

    getHoursDifference(startHour,finishHour)


    return (
        <div className='program' style={ {height : `${getHoursDifference(startHour,finishHour) * 24}px`} }>
            <p className='hour'>{startHour}</p>
            <span className='circle'></span>
            <p className="name">{name}</p>
            <span className='line'></span>
        </div>
    )
}

export default Program