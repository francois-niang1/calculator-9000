import React from 'react'
import '../css/ButtonPanel.css'

export default function SaveButton(props) {
    return (
        <div className='Save'>
            <button className="buttons" onClick={props.buttonClick}>Save</button>
        </div>
    )
}
