import React from 'react'

import './programGrid.css';
import GridDay from './GridDay';


const programs = [
    [
        {
            name: 'nombre del programa',
            startHour: '09:00',
            finishHour: '12:00',
        },
        {
            name: 'nombre del programa',
            startHour: '12:00',
            finishHour: '15:00',
        },
        {
            name: 'nombre del programa',
            startHour: '15:00',
            finishHour: '17:00',
        },
    ]
]

const daysValues = [
    {
        value: 'monday',
        text: 'Lunes'
    },
    {
        value: 'tuesday',
        text: 'Martes'
    },
    {
        value: 'wednesday',
        text: 'Miercoles'
    },
    {
        value: 'thursday',
        text: 'Jueves'
    },
    {
        value: 'friday',
        text: 'Viernes'
    },
    {
        value: 'saturday',
        text: 'Sabado'
    },
    {
        value: 'sunday',
        text: 'Domingo'
    }
]

const ProgramGrid = () => {

    return (
        <div className='programGrid'>
            {programs.map((value, index) => 
                <GridDay key={daysValues[index].value} dayName={daysValues[index].text} programs={value} />
            )}
        </div>
    )
}

export default ProgramGrid