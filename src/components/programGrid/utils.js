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

const getCorrectValues = () => {
    const limit = getLimit();
    const aux = new Array(6);
    for( let i = 0 ; i < 6 ; i++){
        aux[i] = i < limit ? i : limit;
    }
    return [limit, ...aux];
}
 
export function getInitialStateSliderGrid(){
    const correctsValues = getCorrectValues()
    const today = new Date(Date.now())
    return correctsValues[today.getDay()];
}

export function getLimit(){
    const width = document.body.clientWidth;
    return (width > 768) ? 4 : ((width > 420) ? 5 : 6);
}
