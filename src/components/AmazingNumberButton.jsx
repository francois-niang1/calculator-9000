import React, { useState } from 'react'
import '../css/Button.css'

export default function AmazingNumberButton(props) {
    const chiffres = [7,8,9,4,5,6,1,2,3,0,'.']

    const handleClick = (e) => {
        props.handleClickParent(e);
    }

    return (
        <div className="ContainerButton">
            {chiffres.map((nbre) => (
                <button className='buttons' key={nbre} value={nbre} onClick={(e)=> {handleClick(e)}}>{nbre}</button>
            ))}
        </div>
    )
}
