export const programs = [
    [//Lunes
        {
            name: 'nombre del programa',
            startHour: '09:00',
            finishHour: '12:30',
        },
        {
            name: 'nombre del programa',
            startHour: '12:30',
            finishHour: '15:00',
        },
        {
            name: 'nombre del programa',
            startHour: '15:00',
            finishHour: '17:00',
        },
    ],
    [//Martes
        {
            name: 'nombre del programa',
            startHour: '09:00',
            finishHour: '12:30',
        },
        {
            name: 'nombre del programa',
            startHour: '12:30',
            finishHour: '15:00',
        },
        {
            name: 'nombre del programa',
            startHour: '15:00',
            finishHour: '17:00',
        },
    ],
    [//Miercoles
        {
            name: 'nombre del programa',
            startHour: '09:00',
            finishHour: '12:30',
        },
        {
            name: 'nombre del programa',
            startHour: '12:30',
            finishHour: '15:00',
        },
        {
            name: 'nombre del programa',
            startHour: '15:00',
            finishHour: '17:00',
        },
    ],
    [//Jueves
        {
            name: 'nombre del programa',
            startHour: '09:00',
            finishHour: '12:30',
        },
        {
            name: 'nombre del programa',
            startHour: '12:30',
            finishHour: '15:00',
        },
        {
            name: 'nombre del programa',
            startHour: '15:00',
            finishHour: '17:00',
        },
    ],
    [//Viernes
        {
            name: 'nombre del programa',
            startHour: '09:00',
            finishHour: '12:30',
        },
        {
            name: 'nombre del programa',
            startHour: '12:30',
            finishHour: '15:00',
        },
        {
            name: 'nombre del programa',
            startHour: '15:00',
            finishHour: '17:00',
        },
    ],
    [//Sabado
        {
            name: 'nombre del programa',
            startHour: '09:00',
            finishHour: '12:30',
        },
        {
            name: 'nombre del programa',
            startHour: '12:30',
            finishHour: '15:00',
        },
        {
            name: 'nombre del programa',
            startHour: '15:00',
            finishHour: '17:00',
        },
    ],
    [//Domingo
        {
            name: 'nombre del programa',
            startHour: '09:00',
            finishHour: '12:30',
        },
        {
            name: 'nombre del programa',
            startHour: '12:30',
            finishHour: '15:00',
        },
        {
            name: 'nombre del programa',
            startHour: '15:00',
            finishHour: '17:00',
        },
    ]
]

export function getInitialStateSliderGrid(){
    const correctsValues = [4,0,1,2,3,4,4]
    const today = new Date(Date.now())
    return correctsValues[today.getDay()];
}
