import React from 'react'
import { ChevronRightIcon } from '../Icons'


export default function ListEpisodeElement({ id, title, order, selectAction, active }) {


    return (
        <div key={id} className={`listElement ${active && 'active'}`} onClick={selectAction}>
            <span>{order}</span>
            <p>{title}</p>
            <ChevronRightIcon />
        </div>
    )
}
