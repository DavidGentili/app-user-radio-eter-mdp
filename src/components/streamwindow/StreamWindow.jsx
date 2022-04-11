import { React } from 'react';

import ejemploStream from '../../../assets/ej-stream.png'

import './streamWindow.css'

const StreamWindow = () => {

    return (
        <div className="streamWindow">
            <img src={ejemploStream} alt="" />
        </div>
    )
}

export default StreamWindow;