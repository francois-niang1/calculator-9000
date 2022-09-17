import React, { useState } from 'react'
import '../css/Button.css'

export default function GreatOperationButton(props) {
    const op = ['+','-','*','/',]

    const handleClick = (e) => {
        props.handleClickParent(e);
    }

    return (
        <div className="OperationButton">
            {op.map((calcul) => (
                <button className='buttons' key={calcul} value={calcul} onClick={(e)=> {handleClick(e)}}>{calcul}</button>
            ))}
        </div>
    )
}
