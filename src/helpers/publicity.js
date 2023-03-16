export const completePublicities = (data) => {
    const aux = [...initialPublicities];
    while (data.length < 2) {
        data.push(aux.shift());
    }
}

import publicity1 from '@assets/publicity-1.gif'
import publicity2 from '@assets/publicity-2.gif'

const initialPublicities = [
    {
        urlImage: publicity1,
        link: "https://bit.ly/3r57rZC"
    },
    {
        urlImage: publicity2,
        link: "https://www.ciccus.org.ar/"
    },
]