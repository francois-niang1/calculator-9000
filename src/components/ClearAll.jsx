import React, { useState } from 'react'
import '../css/calculator.css'

export default function ClearAll(props) {

    return (
        <div className="Clear">
            <button className="buttons" onClick={props.buttonClick}>Clear</button>
        </div>
    )
}