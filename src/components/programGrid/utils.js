export const programs = [
        [//Lunes
        {
            name: 'nombre del programa',
            startHour: '00:00',
            finishHour: '02:30',
        },
        {
            name: 'nombre del programa',
            startHour: '02:00',
            finishHour: '06:30',
        },
        {
            name: 'nombre del programa',
            startHour: '06:00',
            finishHour: '9:00',
        },
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
        {
            name: 'nombre del programa',
            startHour: '17:00',
            finishHour: '18:00',
        },
        {
            name: 'nombre del programa',
            startHour: '18:00',
            finishHour: '20:30',
        },
        {
            name: 'nombre del programa',
            startHour: '20:30',
            finishHour: '23:30',
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

const p = [
    [//Lunes
        {
            name: 'nombre del programa',
            startHour: '00:00',
            finishHour: '02:30',
        },
        {
            name: 'nombre del programa',
            startHour: '02:00',
            finishHour: '06:30',
        },
        {
            name: 'nombre del programa',
            startHour: '06:00',
            finishHour: '9:00',
        },
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
        {
            name: 'nombre del programa',
            startHour: '17:00',
            finishHour: '20:30',
        },
        {
            name: 'nombre del programa',
            startHour: '20:30',
            finishHour: '23:30',
        },
    ],
]

//Retorna un arreglo con los dias ordenados, como se necesitan para el programa
const getCorrectValues = () => {
    const limit = getLimit();
    const array = new Array(6).fill(0);
    const aux = array.map(function(value, i){
        return ( i < limit) ? i : limit;
    })
    return [limit, ...aux];
}
 
//Obtiene la posicion en la cual debe comenzar el slider de la grilla de programas
export function getInitialStateSliderGrid(){
    const correctsValues = getCorrectValues()
    const today = new Date(Date.now())
    return correctsValues[today.getDay()];
}

//Obtiene el limite del slider de la grilla de programas segun la resolucion de pantalla
export function getLimit(){
    const width = document.body.clientWidth;
    return (width > 768) ? 4 : ((width > 420) ? 5 : 6);
}

 //obtiene la diferencia entre dos horas en el formato hh:mm siempre y cuando el inicio sea menor que el final
 export function getHoursDifference(start, finish){
    const hours = finish.split(':')[0] - start.split(':')[0]; 
    const minutes = (finish.split(':')[1] - start.split(':')[1]) / 60;
    return hours + minutes;
}
