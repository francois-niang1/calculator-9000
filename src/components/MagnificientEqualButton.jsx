import React, { useState } from 'react'
import '../css/Button.css'

export default function MagnificientEqualButton(props) {
    return (
        <div className="EqualButton">
            <button className='buttons' value= {props.value} onClick={props.buttonClick}>{props.equal}</button>
        </div>
    )
}
