import { useState } from "react";


export default function useSlider(elements) {

    const [index, setIndex] = useState(0)
    
    const next = (e) => {
        setIndex(index === elements.length - 1 ? 0 : index + 1);
    }

    const prev = (e) => {
        setIndex(index === 0 ? elements.length - 1 : index - 1);
    }

    const defineIndex = (index) => {
        return (e) => {
            setIndex(index);
        }
    }

    return { prev, next, defineIndex, index}
}